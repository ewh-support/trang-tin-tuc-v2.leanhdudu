jQuery(document).ready(function($){"use strict";$("#preloader-container").delay(2500).fadeOut("slow");$('.flownews-content, .flownews-sidebar').theiaStickySidebar({'containerSelector':'.flownews-container-content',additionalMarginTop:30});$('.search-open-form').on("click",function(){$('.search-open-form').css('display','none');$('.search-close-form').css('display','inline-block');$('.flownews-search form').slideDown("slow");});$('.search-close-form').on("click",function(){$('.search-open-form').css('display','inline-block');$('.search-close-form').css('display','none');$('.flownews-search form').slideUp("slow");});var stickyTop=$('.header-desktop').height();$(window).scroll(function(){if($(this).scrollTop()>=stickyTop){$(".flownews-header-sticky").slideDown("slow");}else{$('.flownews-header-sticky').slideUp("slow");}})
$(window).scroll(function(){if($(this).scrollTop()>50){$('.backtotop').fadeIn('slow');}else{$('.backtotop').fadeOut('slow');}});$('.backtotop').on("click",function(){$("html, body").animate({scrollTop:0},500);return false;});$('.open-menu-responsive').on("click",function(){$('.menu-responsive').css('display','block');$('.close-menu-responsive').css('display','block');$('.open-menu-responsive').css('display','none');$('header').addClass('header-menu-open');});$('.close-menu-responsive').on("click",function(){$('.menu-responsive').css('display','none');$('.close-menu-responsive').css('display','none');$('.open-menu-responsive').css('display','block');$('header').removeClass('header-menu-open');});$('.flownews-element-posts-masonry').masonry({itemSelector:'.item-posts',isAnimated:true});$('.header-mobile .menu-responsive .flownewsicon.fa-angle-down').on("click",function(){$(this).parent().find('.submenu').eq(0).css('display','block');$(this).parent().find('.flownewsicon.fa-angle-down').eq(0).css('display','none');$(this).parent().find('.flownewsicon.fa-angle-up').eq(0).css('display','block');});$('.header-mobile .menu-responsive .flownewsicon.fa-angle-up').on("click",function(){$(this).parent().find('.submenu').eq(0).css('display','none');$(this).parent().find('.flownewsicon.fa-angle-down').eq(0).css('display','block');$(this).parent().find('.flownewsicon.fa-angle-up').eq(0).css('display','none');});});(function($){$.fn.theiaStickySidebar=function(options){var defaults={'containerSelector':'','additionalMarginTop':0,'additionalMarginBottom':0,'updateSidebarHeight':true,'minWidth':0,'disableOnResponsiveLayouts':true,'sidebarBehavior':'modern'};options=$.extend(defaults,options);options.additionalMarginTop=parseInt(options.additionalMarginTop)||0;options.additionalMarginBottom=parseInt(options.additionalMarginBottom)||0;tryInitOrHookIntoEvents(options,this);function tryInitOrHookIntoEvents(options,$that){var success=tryInit(options,$that);if(!success){console.log('TSS: Body width smaller than options.minWidth. Init is delayed.');$(document).scroll(function(options,$that){return function(evt){var success=tryInit(options,$that);if(success){$(this).unbind(evt);}};}(options,$that));$(window).resize(function(options,$that){return function(evt){var success=tryInit(options,$that);if(success){$(this).unbind(evt);}};}(options,$that))}}
function tryInit(options,$that){if(options.initialized===true){return true;}
if($('body').width()<options.minWidth){return false;}
init(options,$that);return true;}
function init(options,$that){options.initialized=true;$('head').append($('<style>.theiaStickySidebar:after {content: ""; display: table; clear: both;}</style>'));$that.each(function(){var o={};o.sidebar=$(this);o.options=options||{};o.container=$(o.options.containerSelector);if(o.container.length==0){o.container=o.sidebar.parent();}
o.sidebar.parents().css('-webkit-transform','none');o.sidebar.css({'position':'relative','overflow':'visible','-webkit-box-sizing':'border-box','-moz-box-sizing':'border-box','box-sizing':'border-box'});o.stickySidebar=o.sidebar.find('.theiaStickySidebar');if(o.stickySidebar.length==0){var javaScriptMIMETypes=/(?:text|application)\/(?:x-)?(?:javascript|ecmascript)/i;o.sidebar.find('script').filter(function(index,script){return script.type.length===0||script.type.match(javaScriptMIMETypes);}).remove();o.stickySidebar=$('<div>').addClass('theiaStickySidebar').append(o.sidebar.children());o.sidebar.append(o.stickySidebar);}
o.marginBottom=parseInt(o.sidebar.css('margin-bottom'));o.paddingTop=parseInt(o.sidebar.css('padding-top'));o.paddingBottom=parseInt(o.sidebar.css('padding-bottom'));var collapsedTopHeight=o.stickySidebar.offset().top;var collapsedBottomHeight=o.stickySidebar.outerHeight();o.stickySidebar.css('padding-top',1);o.stickySidebar.css('padding-bottom',1);collapsedTopHeight-=o.stickySidebar.offset().top;collapsedBottomHeight=o.stickySidebar.outerHeight()- collapsedBottomHeight- collapsedTopHeight;if(collapsedTopHeight==0){o.stickySidebar.css('padding-top',0);o.stickySidebarPaddingTop=0;}
else{o.stickySidebarPaddingTop=1;}
if(collapsedBottomHeight==0){o.stickySidebar.css('padding-bottom',0);o.stickySidebarPaddingBottom=0;}
else{o.stickySidebarPaddingBottom=1;}
o.previousScrollTop=null;o.fixedScrollTop=0;resetSidebar();o.onScroll=function(o){if(!o.stickySidebar.is(":visible")){return;}
if($('body').width()<o.options.minWidth){resetSidebar();return;}
if(o.options.disableOnResponsiveLayouts){var sidebarWidth=o.sidebar.outerWidth(o.sidebar.css('float')=='none');if(sidebarWidth+ 50>o.container.width()){resetSidebar();return;}}
var scrollTop=$(document).scrollTop();var position='static';if(scrollTop>=o.sidebar.offset().top+(o.paddingTop- o.options.additionalMarginTop)){var offsetTop=o.paddingTop+ options.additionalMarginTop;var offsetBottom=o.paddingBottom+ o.marginBottom+ options.additionalMarginBottom;var containerTop=o.sidebar.offset().top;var containerBottom=o.sidebar.offset().top+ getClearedHeight(o.container);var windowOffsetTop=0+ options.additionalMarginTop;var windowOffsetBottom;var sidebarSmallerThanWindow=(o.stickySidebar.outerHeight()+ offsetTop+ offsetBottom)<$(window).height();if(sidebarSmallerThanWindow){windowOffsetBottom=windowOffsetTop+ o.stickySidebar.outerHeight();}
else{windowOffsetBottom=$(window).height()- o.marginBottom- o.paddingBottom- options.additionalMarginBottom;}
var staticLimitTop=containerTop- scrollTop+ o.paddingTop;var staticLimitBottom=containerBottom- scrollTop- o.paddingBottom- o.marginBottom;var top=o.stickySidebar.offset().top- scrollTop;var scrollTopDiff=o.previousScrollTop- scrollTop;if(o.stickySidebar.css('position')=='fixed'){if(o.options.sidebarBehavior=='modern'){top+=scrollTopDiff;}}
if(o.options.sidebarBehavior=='stick-to-top'){top=options.additionalMarginTop;}
if(o.options.sidebarBehavior=='stick-to-bottom'){top=windowOffsetBottom- o.stickySidebar.outerHeight();}
if(scrollTopDiff>0){top=Math.min(top,windowOffsetTop);}
else{top=Math.max(top,windowOffsetBottom- o.stickySidebar.outerHeight());}
top=Math.max(top,staticLimitTop);top=Math.min(top,staticLimitBottom- o.stickySidebar.outerHeight());var sidebarSameHeightAsContainer=o.container.height()==o.stickySidebar.outerHeight();if(!sidebarSameHeightAsContainer&&top==windowOffsetTop){position='fixed';}
else if(!sidebarSameHeightAsContainer&&top==windowOffsetBottom- o.stickySidebar.outerHeight()){position='fixed';}
else if(scrollTop+ top- o.sidebar.offset().top- o.paddingTop<=options.additionalMarginTop){position='static';}
else{position='absolute';}}
if(position=='fixed'){var scrollLeft=$(document).scrollLeft();o.stickySidebar.css({'position':'fixed','width':getWidthForObject(o.stickySidebar)+'px','transform':'translateY('+ top+'px)','left':(o.sidebar.offset().left+ parseInt(o.sidebar.css('padding-left'))- scrollLeft)+'px','top':'0px'});}
else if(position=='absolute'){var css={};if(o.stickySidebar.css('position')!='absolute'){css.position='absolute';css.transform='translateY('+(scrollTop+ top- o.sidebar.offset().top- o.stickySidebarPaddingTop- o.stickySidebarPaddingBottom)+'px)';css.top='0px';}
css.width=getWidthForObject(o.stickySidebar)+'px';css.left='';o.stickySidebar.css(css);}
else if(position=='static'){resetSidebar();}
if(position!='static'){if(o.options.updateSidebarHeight==true){o.sidebar.css({'min-height':o.stickySidebar.outerHeight()+ o.stickySidebar.offset().top- o.sidebar.offset().top+ o.paddingBottom});}}
o.previousScrollTop=scrollTop;};o.onScroll(o);$(document).scroll(function(o){return function(){o.onScroll(o);};}(o));$(window).resize(function(o){return function(){o.stickySidebar.css({'position':'static'});o.onScroll(o);};}(o));if(typeof ResizeSensor!=='undefined'){new ResizeSensor(o.stickySidebar[0],function(o){return function(){o.onScroll(o);};}(o));}
function resetSidebar(){o.fixedScrollTop=0;o.sidebar.css({'min-height':'1px'});o.stickySidebar.css({'position':'static','width':'','transform':'none'});}
function getClearedHeight(e){var height=e.height();e.children().each(function(){height=Math.max(height,$(this).height());});return height;}});}
function getWidthForObject(object){var width;try{width=object[0].getBoundingClientRect().width;}
catch(err){}
if(typeof width==="undefined"){width=object.width();}
return width;}}})(jQuery);function flownews_open_login_dialog(href){jQuery('#flownews-user-modal .modal-dialog').removeClass('registration-complete');var modal_dialog=jQuery('#flownews-user-modal .modal-dialog');modal_dialog.attr('data-active-tab','');switch(href){case'#flownews-register':modal_dialog.attr('data-active-tab','#flownews-register');break;case'#flownews-login':default:modal_dialog.attr('data-active-tab','#flownews-login');break;}
jQuery('#flownews-user-modal').modal('show');}
function flownews_close_login_dialog(){jQuery('#flownews-user-modal').modal('hide');}
jQuery(function($){"use strict";$('[href="#flownews-login"], [href="#flownews-register"]').click(function(e){e.preventDefault();flownews_open_login_dialog($(this).attr('href'));});$('.modal-footer a, a[href="#flownews-reset-password"]').click(function(e){e.preventDefault();$('#flownews-user-modal .modal-dialog').attr('data-active-tab',$(this).attr('href'));});$('#flownews_login_form').on('submit',function(e){e.preventDefault();var button=$(this).find('button');button.button('loading');$.post(ptajax.ajaxurl,$('#flownews_login_form').serialize(),function(data){var obj=$.parseJSON(data);$('.flownews-login .flownews-errors').html(obj.message);if(obj.error==false){$('#flownews-user-modal .modal-dialog').addClass('loading');window.location.reload(true);button.hide();}
button.button('reset');});});$('#flownews_registration_form').on('submit',function(e){e.preventDefault();var button=$(this).find('button');button.button('loading');$.post(ptajax.ajaxurl,$('#flownews_registration_form').serialize(),function(data){var obj=$.parseJSON(data);$('.flownews-register .flownews-errors').html(obj.message);if(obj.error==false){$('#flownews-user-modal .modal-dialog').addClass('registration-complete');button.hide();}
button.button('reset');});});$('#flownews_reset_password_form').on('submit',function(e){e.preventDefault();var button=$(this).find('button');button.button('loading');$.post(ptajax.ajaxurl,$('#flownews_reset_password_form').serialize(),function(data){var obj=$.parseJSON(data);$('.flownews-reset-password .flownews-errors').html(obj.message);button.button('reset');});});if(window.location.hash=='#login'){flownews_open_login_dialog('#flownews-login');}});if(typeof jQuery==='undefined'){throw new Error('Bootstrap\'s JavaScript requires jQuery')}
+function($){'use strict';var version=$.fn.jquery.split(' ')[0].split('.')
if((version[0]<2&&version[1]<9)||(version[0]==1&&version[1]==9&&version[2]<1)||(version[0]>2)){throw new Error('Bootstrap\'s JavaScript requires jQuery version 1.9.1 or higher, but lower than version 3')}}(jQuery);+function($){'use strict';var Button=function(element,options){this.$element=$(element)
this.options=$.extend({},Button.DEFAULTS,options)
this.isLoading=false}
Button.VERSION='3.3.6'
Button.DEFAULTS={loadingText:'loading...'}
Button.prototype.setState=function(state){var d='disabled'
var $el=this.$element
var val=$el.is('input')?'val':'html'
var data=$el.data()
state+='Text'
if(data.resetText==null)$el.data('resetText',$el[val]())
setTimeout($.proxy(function(){$el[val](data[state]==null?this.options[state]:data[state])
if(state=='loadingText'){this.isLoading=true
$el.addClass(d).attr(d,d)}else if(this.isLoading){this.isLoading=false
$el.removeClass(d).removeAttr(d)}},this),0)}
Button.prototype.toggle=function(){var changed=true
var $parent=this.$element.closest('[data-toggle="buttons"]')
if($parent.length){var $input=this.$element.find('input')
if($input.prop('type')=='radio'){if($input.prop('checked'))changed=false
$parent.find('.active').removeClass('active')
this.$element.addClass('active')}else if($input.prop('type')=='checkbox'){if(($input.prop('checked'))!==this.$element.hasClass('active'))changed=false
this.$element.toggleClass('active')}
$input.prop('checked',this.$element.hasClass('active'))
if(changed)$input.trigger('change')}else{this.$element.attr('aria-pressed',!this.$element.hasClass('active'))
this.$element.toggleClass('active')}}
function Plugin(option){return this.each(function(){var $this=$(this)
var data=$this.data('bs.button')
var options=typeof option=='object'&&option
if(!data)$this.data('bs.button',(data=new Button(this,options)))
if(option=='toggle')data.toggle()
else if(option)data.setState(option)})}
var old=$.fn.button
$.fn.button=Plugin
$.fn.button.Constructor=Button
$.fn.button.noConflict=function(){$.fn.button=old
return this}
$(document).on('click.bs.button.data-api','[data-toggle^="button"]',function(e){var $btn=$(e.target)
if(!$btn.hasClass('btn'))$btn=$btn.closest('.btn')
Plugin.call($btn,'toggle')
if(!($(e.target).is('input[type="radio"]')||$(e.target).is('input[type="checkbox"]')))e.preventDefault()}).on('focus.bs.button.data-api blur.bs.button.data-api','[data-toggle^="button"]',function(e){$(e.target).closest('.btn').toggleClass('focus',/^focus(in)?$/.test(e.type))})}(jQuery);+function($){'use strict';var Modal=function(element,options){this.options=options
this.$body=$(document.body)
this.$element=$(element)
this.$dialog=this.$element.find('.modal-dialog')
this.$backdrop=null
this.isShown=null
this.originalBodyPad=null
this.scrollbarWidth=0
this.ignoreBackdropClick=false
if(this.options.remote){this.$element.find('.modal-content').load(this.options.remote,$.proxy(function(){this.$element.trigger('loaded.bs.modal')},this))}}
Modal.VERSION='3.3.6'
Modal.TRANSITION_DURATION=300
Modal.BACKDROP_TRANSITION_DURATION=150
Modal.DEFAULTS={backdrop:true,keyboard:true,show:true}
Modal.prototype.toggle=function(_relatedTarget){return this.isShown?this.hide():this.show(_relatedTarget)}
Modal.prototype.show=function(_relatedTarget){var that=this
var e=$.Event('show.bs.modal',{relatedTarget:_relatedTarget})
this.$element.trigger(e)
if(this.isShown||e.isDefaultPrevented())return
this.isShown=true
this.checkScrollbar()
this.setScrollbar()
this.$body.addClass('modal-open')
this.escape()
this.resize()
this.$element.on('click.dismiss.bs.modal','[data-dismiss="modal"]',$.proxy(this.hide,this))
this.$dialog.on('mousedown.dismiss.bs.modal',function(){that.$element.one('mouseup.dismiss.bs.modal',function(e){if($(e.target).is(that.$element))that.ignoreBackdropClick=true})})
this.backdrop(function(){var transition=$.support.transition&&that.$element.hasClass('fade')
if(!that.$element.parent().length){that.$element.appendTo(that.$body)}
that.$element.show().scrollTop(0)
that.adjustDialog()
if(transition){that.$element[0].offsetWidth}
that.$element.addClass('in')
that.enforceFocus()
var e=$.Event('shown.bs.modal',{relatedTarget:_relatedTarget})
transition?that.$dialog.one('bsTransitionEnd',function(){that.$element.trigger('focus').trigger(e)}).emulateTransitionEnd(Modal.TRANSITION_DURATION):that.$element.trigger('focus').trigger(e)})}
Modal.prototype.hide=function(e){if(e)e.preventDefault()
e=$.Event('hide.bs.modal')
this.$element.trigger(e)
if(!this.isShown||e.isDefaultPrevented())return
this.isShown=false
this.escape()
this.resize()
$(document).off('focusin.bs.modal')
this.$element.removeClass('in').off('click.dismiss.bs.modal').off('mouseup.dismiss.bs.modal')
this.$dialog.off('mousedown.dismiss.bs.modal')
$.support.transition&&this.$element.hasClass('fade')?this.$element.one('bsTransitionEnd',$.proxy(this.hideModal,this)).emulateTransitionEnd(Modal.TRANSITION_DURATION):this.hideModal()}
Modal.prototype.enforceFocus=function(){$(document).off('focusin.bs.modal').on('focusin.bs.modal',$.proxy(function(e){if(this.$element[0]!==e.target&&!this.$element.has(e.target).length){this.$element.trigger('focus')}},this))}
Modal.prototype.escape=function(){if(this.isShown&&this.options.keyboard){this.$element.on('keydown.dismiss.bs.modal',$.proxy(function(e){e.which==27&&this.hide()},this))}else if(!this.isShown){this.$element.off('keydown.dismiss.bs.modal')}}
Modal.prototype.resize=function(){if(this.isShown){$(window).on('resize.bs.modal',$.proxy(this.handleUpdate,this))}else{$(window).off('resize.bs.modal')}}
Modal.prototype.hideModal=function(){var that=this
this.$element.hide()
this.backdrop(function(){that.$body.removeClass('modal-open')
that.resetAdjustments()
that.resetScrollbar()
that.$element.trigger('hidden.bs.modal')})}
Modal.prototype.removeBackdrop=function(){this.$backdrop&&this.$backdrop.remove()
this.$backdrop=null}
Modal.prototype.backdrop=function(callback){var that=this
var animate=this.$element.hasClass('fade')?'fade':''
if(this.isShown&&this.options.backdrop){var doAnimate=$.support.transition&&animate
this.$backdrop=$(document.createElement('div')).addClass('modal-backdrop '+ animate).appendTo(this.$body)
this.$element.on('click.dismiss.bs.modal',$.proxy(function(e){if(this.ignoreBackdropClick){this.ignoreBackdropClick=false
return}
if(e.target!==e.currentTarget)return
this.options.backdrop=='static'?this.$element[0].focus():this.hide()},this))
if(doAnimate)this.$backdrop[0].offsetWidth
this.$backdrop.addClass('in')
if(!callback)return
doAnimate?this.$backdrop.one('bsTransitionEnd',callback).emulateTransitionEnd(Modal.BACKDROP_TRANSITION_DURATION):callback()}else if(!this.isShown&&this.$backdrop){this.$backdrop.removeClass('in')
var callbackRemove=function(){that.removeBackdrop()
callback&&callback()}
$.support.transition&&this.$element.hasClass('fade')?this.$backdrop.one('bsTransitionEnd',callbackRemove).emulateTransitionEnd(Modal.BACKDROP_TRANSITION_DURATION):callbackRemove()}else if(callback){callback()}}
Modal.prototype.handleUpdate=function(){this.adjustDialog()}
Modal.prototype.adjustDialog=function(){var modalIsOverflowing=this.$element[0].scrollHeight>document.documentElement.clientHeight
this.$element.css({paddingLeft:!this.bodyIsOverflowing&&modalIsOverflowing?this.scrollbarWidth:'',paddingRight:this.bodyIsOverflowing&&!modalIsOverflowing?this.scrollbarWidth:''})}
Modal.prototype.resetAdjustments=function(){this.$element.css({paddingLeft:'',paddingRight:''})}
Modal.prototype.checkScrollbar=function(){var fullWindowWidth=window.innerWidth
if(!fullWindowWidth){var documentElementRect=document.documentElement.getBoundingClientRect()
fullWindowWidth=documentElementRect.right- Math.abs(documentElementRect.left)}
this.bodyIsOverflowing=document.body.clientWidth<fullWindowWidth
this.scrollbarWidth=this.measureScrollbar()}
Modal.prototype.setScrollbar=function(){var bodyPad=parseInt((this.$body.css('padding-right')||0),10)
this.originalBodyPad=document.body.style.paddingRight||''
if(this.bodyIsOverflowing)this.$body.css('padding-right',bodyPad+ this.scrollbarWidth)}
Modal.prototype.resetScrollbar=function(){this.$body.css('padding-right',this.originalBodyPad)}
Modal.prototype.measureScrollbar=function(){var scrollDiv=document.createElement('div')
scrollDiv.className='modal-scrollbar-measure'
this.$body.append(scrollDiv)
var scrollbarWidth=scrollDiv.offsetWidth- scrollDiv.clientWidth
this.$body[0].removeChild(scrollDiv)
return scrollbarWidth}
function Plugin(option,_relatedTarget){return this.each(function(){var $this=$(this)
var data=$this.data('bs.modal')
var options=$.extend({},Modal.DEFAULTS,$this.data(),typeof option=='object'&&option)
if(!data)$this.data('bs.modal',(data=new Modal(this,options)))
if(typeof option=='string')data[option](_relatedTarget)
else if(options.show)data.show(_relatedTarget)})}
var old=$.fn.modal
$.fn.modal=Plugin
$.fn.modal.Constructor=Modal
$.fn.modal.noConflict=function(){$.fn.modal=old
return this}
$(document).on('click.bs.modal.data-api','[data-toggle="modal"]',function(e){var $this=$(this)
var href=$this.attr('href')
var $target=$($this.attr('data-target')||(href&&href.replace(/.*(?=#[^\s]+$)/,'')))
var option=$target.data('bs.modal')?'toggle':$.extend({remote:!/#/.test(href)&&href},$target.data(),$this.data())
if($this.is('a'))e.preventDefault()
$target.one('show.bs.modal',function(showEvent){if(showEvent.isDefaultPrevented())return
$target.one('hidden.bs.modal',function(){$this.is(':visible')&&$this.trigger('focus')})})
Plugin.call($target,option,this)})}(jQuery);