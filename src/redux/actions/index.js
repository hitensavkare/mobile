import * as jobActions from './jobActions/jobActions'
import * as notifyActions from './notificationActions/notificationActions'
import * as authenticationActions from './authenticationActions/authActions'

export const ActionCreators=Object.assign({},
  jobActions,
  notifyActions,
  authenticationActions
)
