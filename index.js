const express = require("express");
const app = express();
const port = 3000;
app.get('/nick', (req, res) => {
   res.json({
      data: [
         {
            oid: 1,
            name: "dave",
         },
         {
            oid: 2,
            name: "amy",
         },

      ],
      paging: {
         previous: "/nick?limit=3&before={ base64Endoing(oid) }",
         next: "/nick?limit=3&after={base64Endoing(oid)}"
      }
   }
   );

})

app.listen(port, () => {
   console.log(`Example app listening at http://localhost:${port}`)
})

