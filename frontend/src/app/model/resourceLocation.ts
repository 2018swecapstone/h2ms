/**
 * H2MS API
 * API for interacting with the H2MS backend.
 *
 * OpenAPI spec version: 1.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */

import { Link } from './link';
import { Location } from './location';


export interface ResourceLocation {
    address?: string;
    children?: Array<Location>;
    country?: string;
    id?: number;
    links?: Array<Link>;
    name?: string;
    parent?: Location;
    type?: string;
    zip?: string;
}
