let dataBase = [];

const verifyUser = function(username, password) {
    return new Promise((resolve, reject) => {
        dataBase.verifyUser(username, password, (error, userInfo) => {
            if (error) {
                reject(error)
            } else {
                dataBase.getRoles(username, (error, roles) => {
                    if (error) {
                        reject(error)
                    } else {
                        dataBase.logAccess(username, (error) => {
                            if (error) {
                                reject(error);
                            } else {
                                var responseResult={
                                    userInfoItems:userInfo,
                                    rolesItems:roles
                                    };
                                resolve(responseResult);
                            }
                        })
                    }
                })
            }
        })
    });
};
verifyUser('demouser', "1235#@$").then(response => {console.log(response)})
.catch(err => console.log(err));