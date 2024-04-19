//Time for some pseudocode!
//On item click, add to inventory. When clicked emit to room that object is valid (False to True).
'use strict';

AFRAME.registerComponent('addtoinventory', {
    schema: {
        duration: {type: 'number', default:10000.0},
        item_id: {default:'default'}
    },

    init: function()
    {
        console.log("js exists");
        //const Context_AF = this;
        let socket = io('http://localhost:8080');
        var data = this.data;
        let keyPressed = false;

        socket.on('connect', (userData) => {
            console.log('I exist!');
            });


        
        let scene = document.querySelector('a-scene');
        //const saveKey = document.getElementById('key');

        //key
        let myKey = document.querySelector("#key");
        //let invKey = document.querySelector("inv_key");
        myKey.addEventListener('click', function(){
                console.log('i key was pressed');
                keyPressed = true;
                localStorage.setItem('inv_Key', 'true');
                myKey.parentNode.removeChild(myKey);      
            });

            var key_vis = localStorage.getItem('inv_key');
            console.log('key stat: ', key_vis);
            if(key_vis == 'true')
            {
                console.log("key stays gone");
                myKey.setAttribute("visible", false);
                //myKey.parentNode.removeChild(myKey);                
            } 

            
            
            //chronometer

            let myChronometer = document.querySelector("#chronometer");
        //let invStove = document.querySelector("inv_key");
        myChronometer.addEventListener('click', function(){
                //console.log('i key was pressed');
                keyPressed = true;
                localStorage.setItem('inv_Chronometer', 'true');
                myChronometer.parentNode.removeChild(myChronometer);      
            });

            var chronometer_vis = localStorage.getItem('inv_chronometer');
            //console.log('key stat: ', key_vis);
            if(chronometer_vis == 'true')
            {
                //console.log("key stays gone");
                myChronometer.setAttribute("visible", false);
                //myKey.parentNode.removeChild(myKey);                
            } 
            

            //barometer
            let mybarometer = document.querySelector("#barometer");
            //let invStove = document.querySelector("inv_key");
            mybarometer.addEventListener('click', function(){
                    //console.log('i key was pressed');
                    keyPressed = true;
                    localStorage.setItem('inv_barometer', 'true');
                    mybarometer.parentNode.removeChild(mybarometer);      
                });
    
                var barometer_vis = localStorage.getItem('inv_barometer');
                //console.log('key stat: ', key_vis);
                if(barometer_vis == 'true')
                {
                    //console.log("key stays gone");
                    mybarometer.setAttribute("visible", false);
                    //myKey.parentNode.removeChild(myKey);                
                }  
                
                
                //compass
                let myCompass = document.querySelector("#compass");
            //let invStove = document.querySelector("inv_key");
            myCompass.addEventListener('click', function(){
                    //console.log('i key was pressed');
                    keyPressed = true;
                    localStorage.setItem('inv_compass', 'true');
                    myCompass.parentNode.removeChild(myCompass);      
                });
    
                var compass_vis = localStorage.getItem('inv_compass');
                //console.log('key stat: ', key_vis);
                if(compass_vis == 'true')
                {
                    //console.log("key stays gone");
                    myCompass.setAttribute("visible", false);
                    //myKey.parentNode.removeChild(myKey);                
                }  
                
                //hook
                let myHook = document.querySelector("#hook");
                //let invStove = document.querySelector("inv_key");
                myHook.addEventListener('click', function(){
                        //console.log('i key was pressed');
                        keyPressed = true;
                        localStorage.setItem('inv_hook', 'true');
                        myHook.parentNode.removeChild(myHook);      
                    });
        
                    var Hook_vis = localStorage.getItem('inv_hook');
                    //console.log('key stat: ', key_vis);
                    if(Hook_vis == 'true')
                    {
                        //console.log("key stays gone");
                        myHook.setAttribute("visible", false);
                        //myKey.parentNode.removeChild(myKey);                
                    }
                //lantern
                    let myLantern = document.querySelector("#lantern");
                    //let invStove = document.querySelector("inv_key");
                    myLantern.addEventListener('click', function(){
                            //console.log('i key was pressed');
                            keyPressed = true;
                            localStorage.setItem('inv_lantern', 'true');
                            myLantern.parentNode.removeChild(myLantern);      
                        });
            
                        var Lantern_vis = localStorage.getItem('inv_lantern');
                        //console.log('key stat: ', key_vis);
                        if(Lantern_vis == 'true')
                        {
                            //console.log("key stays gone");
                            myLantern.setAttribute("visible", false);
                            //myKey.parentNode.removeChild(myKey);                
                        }
    }
})