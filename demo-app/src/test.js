var messageStatuses = ['New', 'Pending', 'Open', 'Resolved', 'Unread', 'Read'];

var userType=userDetails.user_type;
var  msgStatus= payloadData.msg_status;
var sendUserType= senderData.user_type; 
var  receiverUsertype = receiverData.user_type;
let senderMsgStatus = (userType === 2 || userType === 3 || userType === 6) && msgStatus
                ? msgStatus : messageStatuses[1];

let receiverMsgStatus = messageStatuses[0];

if (
  //doctor to lab
  ((sendUserType === 4 || sendUserType === 5) && (receiverUsertype  === 2 || receiverUsertype  === 6)) ||
  //lab to producer
  ((sendUserType === 2 || (isEmployee(userDetails) && isLabEmployee(userDetails))) && receiverData.user_type === 3)
) {
  senderMsgStatus =
    senderLastMessageStatus && (senderLastMessageStatus != messageStatuses[3] || receiverLastMessageStatus != messageStatuses[3])
      ? senderLastMessageStatus
      : senderMsgStatus;
  //new or open
  receiverMsgStatus = receiverLastMessageStatus ? messageStatuses[2] : messageStatuses[0];
}

if (
  //lab to doctor
  ((receiverUsertype === 4 || receiverUsertype === 5) &&
    (sendUserType === 2 || sendUserType === 6 || sendUserType === 8)) ||
  //producer to lab
  (receiverUsertype === 2 && receiverUsertype === 3)
) {
  //pending or resolved.
  senderMsgStatus = payloadData.msg_status || senderMsgStatus;
  //Unread
  receiverMsgStatus = messageStatuses[4];
}