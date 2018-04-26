package edu.harvard.h2ms.service;

import edu.harvard.h2ms.repository.EventRepository;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import javax.annotation.PostConstruct;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;

@Component
@Service("reportService")
public class ReportServiceImpl implements ReportService {

  final Logger log = LoggerFactory.getLogger(ReportServiceImpl.class);

  @Autowired private EventRepository eventRepository;

  //  /** Creates event dump */
  //  @Override
  //  public String createEventReport() {
  //    return requestReport("eventDump");
  //  }

  @Autowired private List<ReportWorker> reportWorkers;

  private static final Map<String, ReportWorker> reportWorkerCache = new HashMap<>();

  @PostConstruct
  public void initReportWorkerCache() {
    for (ReportWorker reportWorker : reportWorkers) {
      log.info("*********** cache init on" + reportWorker.getType());
      reportWorkerCache.put(reportWorker.getType(), reportWorker);
    }
  }

  public static ReportWorker getReportWorker(String reportType) {
    //    log.info("***** cache count" + reportWorkerCache.size());
    ReportWorker reportWorker = reportWorkerCache.get(reportType);
    if (reportWorker == null) throw new RuntimeException(reportType);
    return reportWorker;
  }

  @Override
  public String requestReport(String reportType) {
    log.info("report requested.  report type: " + reportType);
    log.debug("***** cache count" + reportWorkerCache.size());

    ReportWorker reportWorker = getReportWorker(reportType);

    String ans = reportWorker.createReport();

    // TODO: add compliance result text
    log.info("***** answer" + ans);
    return ans;
  }
}
