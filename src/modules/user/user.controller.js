
export async function signUp(req, res) {
    try {
         return res.status(200).send(req.body);
     } catch (e) {
         return res.status(500).send(e);
      }  
 }

 export async function getList(req, res) {
    try {
         return res.status(200).send(req.method);
     } catch (e) {
         return res.status(500).send(e);
      }  
 }



 