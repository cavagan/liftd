using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Diagnostics;
using System.Linq;
using System.ServiceProcess;
using System.Text;
using System.Threading.Tasks;
using System.Timers;
using System.Net;
using System.Net.Http;


namespace liftd
{
    public partial class Service1 : ServiceBase
    {
        private Timer timer1 = null;
        
        
        
        public Service1()
        {
            InitializeComponent();
        }

        protected override void OnStart(string[] args)
        {
            int secondsTil = 30000;
            timer1 = new Timer();
            this.timer1.Interval = secondsTil;
            this.timer1.Elapsed += new System.Timers.ElapsedEventHandler(this.timer1_Tick);
            timer1.Enabled = true;
            library.WriteErrorLog("Windows service started flerdGlorp ");
                        
        }
        private void timer1_Tick(object sender, ElapsedEventArgs e)
        {
            //Do things

            var i = sendPost();
            library.WriteErrorLog("timer ticked. Things were done and I think return was" + i );


            
        }
        protected override void OnStop()
        {

            timer1.Enabled = false;
            library.WriteErrorLog(" Windows Service stopped" );


        }

        public async Task<string> sendPost()
        {
            using (var client = new HttpClient())
            {
                var values = new Dictionary<string, string>
        {
           { "thing1", "hello" },
           { "thing2", "world" }
        };

                var content = new FormUrlEncodedContent(values);

                var response = await client.PostAsync("http://104.171.119.162:8181/", content);

                var responseString = await response.Content.ReadAsStringAsync();
                return responseString;
            }
        }



    }
}
