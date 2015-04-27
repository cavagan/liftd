using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.IO;
using System.Net;
using System.Net.Http;

namespace liftd
{
   public static class library
    {
       public static void WriteErrorLog(Exception ex)
       {

           StreamWriter sw =null;
           try
           {

               sw = new StreamWriter(AppDomain.CurrentDomain.BaseDirectory + "\\Logfile.txt", true);
               sw.WriteLine(DateTime.Now.ToString() + ": " + ex.Source.ToString().Trim() + "; " + ex.Message.Trim());
               sw.Flush();
               sw.Close();

           }
           catch
           { 
           }
       }
       public static void WriteErrorLog(string Message)
       {

           StreamWriter sw = null;
           try
           {
               sw = new StreamWriter(AppDomain.CurrentDomain.BaseDirectory + "\\logfile.txt", true);
               sw.WriteLine(DateTime.Now.ToString() + ":" + Message);
               sw.Flush();
               sw.Close();
           }
           catch { }
           
       }
       //public async Task<string> sendPost()
    //   {
    //   using (var client = new HttpClient())
    //     {
    //           var values = new Dictionary<string, string>
    //{
    //   { "thing1", "hello" },
    //   { "thing2", "world" }
    //};

    //  var content = new FormUrlEncodedContent(values);

    //  var response = await client.PostAsync("http://104.171.119.162:8181/", content);

    //  var responseString = await response.Content.ReadAsStringAsync();
    //  return responseString;
    //       }
    //   }
   }
}
