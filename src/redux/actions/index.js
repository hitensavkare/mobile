import * as jobActions from './jobActions/jobActions'
import * as notifyActions from './notificationActions/notificationActions'
import * as authenticationActions from './authenticationActions/authActions'
import * as otherActions from './otherActions/otherActions'
import * as testActions from './testActions/testActions'
import * as discussActions from './discussActions/discussActions'
export const ActionCreators=Object.assign({},
  jobActions,
  notifyActions,
  authenticationActions,
  otherActions,
  testActions,
  discussActions,
)
