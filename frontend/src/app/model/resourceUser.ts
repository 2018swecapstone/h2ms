/**
 * H2MS API
 * API for interacting with the H2MS backend.
 *
 * OpenAPI spec version: 1.0
 *
 *
 * NOTE: This class was auto generated by the swagger code generator program.
 * Feel free to edit it manually, because the swagger generator put out junk.
 */

import { GrantedAuthority } from './grantedAuthority';
import { Link } from './link';
import { Role } from './role';


export interface ResourceUser {
    accountNonExpired?: boolean;
    accountNonLocked?: boolean;
    authorities?: Array<GrantedAuthority>;
    createdOn?: string;
    credentialsNonExpired?: boolean;
    email?: string;
    enabled?: boolean;
    firstName?: string;
    id?: number;
    lastLogin?: string;
    lastName?: string;
    _links?: {
        self?: Link,
        profile?: Link,
        roles?: Link,
        search?: Link
    };
    middleName?: string;
    notificationFrequency?: string;
    resetToken?: string;
    roles?: Array<Role>;
    type?: string;
    verified?: string;
}
