
'use strict';

AFRAME.registerComponent('spawn_items', {
    schema: {
        duration: {type: 'number', default:10000.0}, 
    },
    init: function()
    {
            let s_key = document.querySelector("#key"); 
            s_key.setAttribute("visible",false);
            var key_vis = localStorage.getItem('inv_Key');
            console.log('key is: ', key_vis);
            if(key_vis == 'true')
            {
                s_key.setAttribute("visible",key_vis);

            }
    }

})