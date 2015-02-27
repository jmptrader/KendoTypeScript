using System.Web.Http;
using KendoTypeScript.Models;

namespace KendoTypeScript.Controllers
{
    public class ValuesController : ApiController
    {
        // GET api/values
        public ComboBoxItemOutput[] Get()
        {
            var output = new ComboBoxItemOutput[12];

            var o1 = new ComboBoxItemOutput { Description = "January", Id = 1 };
            output[0] = o1;
            var o2 = new ComboBoxItemOutput { Description = "February", Id = 2 };
            output[1] = o2;
            var o3 = new ComboBoxItemOutput { Description = "March", Id = 3 };
            output[2] = o3;
            var o4 = new ComboBoxItemOutput { Description = "April", Id = 4 };
            output[3] = o4;
            var o5 = new ComboBoxItemOutput { Description = "May", Id = 5 };
            output[4] = o5;
            var o6 = new ComboBoxItemOutput { Description = "June", Id = 6 };
            output[5] = o6;
            var o7 = new ComboBoxItemOutput { Description = "July", Id = 7 };
            output[6] = o7;
            var o8 = new ComboBoxItemOutput { Description = "August", Id = 8 };
            output[7] = o8;
            var o9 = new ComboBoxItemOutput { Description = "September", Id = 9 };
            output[8] = o9;
            var o10 = new ComboBoxItemOutput { Description = "October", Id = 10 };
            output[9] = o10;
            var o11 = new ComboBoxItemOutput { Description = "November", Id = 11 };
            output[10] = o11;
            var o12 = new ComboBoxItemOutput { Description = "December", Id = 12 };
            output[11] = o12;
            return output;
        }

        // GET api/values/5
        public string Get(int id)
        {
            return "value";
        }

        // POST api/values
        public void Post([FromBody]string value)
        {
        }

        // PUT api/values/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/values/5
        public void Delete(int id)
        {
        }
    }
}