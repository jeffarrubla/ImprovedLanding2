; // Requires jQuery 1.9.1
// This script mjust be called on every page or 'main container' the user wants to see the top bar.
//Creates and add the styles for the top bar and the modal
var style = document.createElement('style');
style.type = 'text/css';
style.innerHTML = '.modal-backdrop {    position: fixed;    top: 0;    right: 0;    bottom: 0;    left: 0;    z-index: 1040;    background-color: #000;opacity: .5 !important;}    .wisepop-popin {        display: none;        box-sizing: content-box; border-style: solid; padding: 20px; position: fixed; top: 15%; margin: 0px auto; left: 0px; z-index: 10000000; width: 234px; border-width: 0px; border-radius: 0px; background-color: rgb(0, 14, 92); border-color: rgb(234, 234, 234); opacity: 1; right: 0px; overflow: auto; bottom: auto;    }    .wisepop-building-block-action{        border-bottom:0px solid rgb(43,152,20);border-bottom: 0px solid rgba(39,65,90, 0.3);zoom:1;border-radius:10px;display:inline-block;text-decoration:none;min-height:22px;line-height:22px;padding:10px 16px;color:#ffffff;background-color:#32b318;font-family:Source Sans Pro;font-size:18px    }    .dismiss-links{        text-align:center;margin-bottom: 15px;    }    .dismiss-links > a{        font-family: Source Sans Pro; font-size: 12px; color: #707070; text-decoration: underline; margin-left: 10px;    }    .daron{        margin-bottom: 15px    }    .daron > a > img {        display: block;        margin: auto;        max-width:100%;    }    .wisepop-header {        line-height: 20px;min-height: 30px;margin-bottom: 15px;    }    .wisepop-header > span {        font-size:12px;    }    .wisepop-header > span > div{        text-align:center;    }    .wisepop-header > span > div > span{        color:#ffffff;    }    .wisepop-header > span > div > span > span {        font-size:19px;    }    .wisepop-header > span > div > span > span  > span {        color:white;text-align:center;background-color:rgb(0,14,92);    }    .wisepop-body{        margin-bottom: 15px;text-align:center;    } .wisepop-close{ display:none } ';
document.getElementsByTagName('head')[0].appendChild(style);

//Append the popup with the code "If We Gave You 100 Free Spins, Could You Win?"
$('<div id="wisepop" class="wisepop-popin">	<a class="wisepop-close" id="close-wisepop" href="https://fb.com"> </a>	<div id="wisepop-content" class="wisepop-content">		<div class="wisepop-header">			<span >&nbsp;				<div >					<span>						<span>							<span>	      	If We Gave You 100 Free Spins, Could You Win?</span>						</span>					</span>				</div> &nbsp;				<div></div> <div></div> <div></div> <div></div>      		</span>      	</div>      	<div class="daron">      		<a href="fb.com" target="_self">  				<img src="https://comtrckhrd.online/landers/upworkscripts/1_over_bs/aunt_sues_files/usd.gif">  			</a>      	</div>      	<div class="wisepop-body">      		<a class="wisepop-building-block-action" href="https://fb.com" target="_self" data-ignore-tracking="0">      	Yes!      	 	</a> 		</div> 		<div data-type="dismiss-links" class="dismiss-links"> 			<a >No, I feel like a looser today</a> 		</div>	</div></div>').prependTo('body');

jQuery(document).ready(function($) {
	//Check if it's a mobile browser
	if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
		// this of allows to show the message when click on back button on browser
		if (window.history && window.history.pushState) {

			// only used 1 to let the user go back if he wants on a second change.
		    window.history.pushState('forward', null, './#n');

		    $(window).on('popstate', function() {
		    	$('#wisepop').fadeIn();
		    	$('<div class="modal-backdrop fade in"></div>').prependTo('body');
		    	// Put this line as a comment if you want the user not stays there, seeing the message each time he press the back button.
		    	window.history.pushState('forward', null, './#n');
		    });
		}
		// to close the popup "If We Gave You 100 Free Spins, Could You Win?"
		$('.dismiss-links > a').on('click',function(){
			$('#wisepop').hide();
			$('.modal-backdrop').remove();
		});
	}
});
