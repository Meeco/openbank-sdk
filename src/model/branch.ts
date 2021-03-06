/**
 * Open Bank Project API
 * An Open Source API for Banks. (c) TESOBE Ltd. 2011 - 2016. Licensed under the
 * AGPL and commercial licences.
 *
 * OpenAPI spec version: v3.0.0
 * Contact: contact@tesobe.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */

import {Address} from './address';
import {BankId} from './bankId';
import {DriveUp} from './driveUp';
import {Lobby} from './lobby';
import {Location} from './location';
import {Meta} from './meta';



export interface Branch {
  name: string;

  location: Location;

  phoneNumber?: string;

  driveUp?: DriveUp;

  isAccessible?: boolean;

  branchId: any;

  meta: Meta;

  moreInfo?: string;

  lobbyString?: any;

  lobby?: Lobby;

  address: Address;

  bankId: BankId;

  branchType?: string;

  branchRouting?: any;

  driveUpString?: any;
}
