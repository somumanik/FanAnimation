function startFan(speed)
{
    if(speed == 0)
    {
        //testing
        // alert('0');
       
        // document.getElementById('myfan1').style.animationDuration = '1s';
        document.getElementById('myfan1').style.animationPlayState = 'paused';
        document.querySelector('.mybtn').style.backgroundPosition = "0px -13px";
       

    }
    
    else if(speed == 1)
    {
        //testing
        // alert('1');
        document.querySelector('.myfan').style.animationDuration = '0.9s';
        // document.getElementById('myfan1').style.animationDuration = '0.9s';
        document.getElementById('myfan1').style.animationPlayState = 'running';
        document.querySelector('.mybtn').style.backgroundPosition = "0px -63px";
    }
    else if(speed == 2)
    {
        //testing
        // alert('2');
        document.getElementById('myfan1').style.animationDuration = '0.6s';
        document.getElementById('myfan1').style.animationPlayState = 'running';
        document.querySelector('.mybtn').style.backgroundPosition = "0px -63px";
    }
    else
    {
         //testing
        //  alert('3');
        document.getElementById('myfan1').style.animationDuration = '0.2s';
        document.getElementById('myfan1').style.animationPlayState = 'running';
        document.querySelector('.mybtn').style.backgroundPosition = "0px -63px";
    }
  
  
}