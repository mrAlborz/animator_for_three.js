var animator_motion = {
    x: function (e,n) {e.position.x = n},
    y: function (e,n) {e.position.y = n},
    z: function (e,n) {e.position.z = n},
    rx: function (e,n) {e.rotation.x = n},
    ry: function (e,n) {e.rotation.y = n},
    rz: function (e,n) {e.rotation.z = n},
    sx: function (e,n) {e.scale.x = n},
    sy: function (e,n) {e.scale.y = n},
    sz: function (e,n) {e.scale.z = n},
    o: function (e,n) {e.opacity = n},

    px: function (e) {return e.position.x},
    py: function (e) {return e.position.y},
    pz: function (e) {return e.position.z},
    prx: function (e) {return e.rotation.x},
    pry: function (e) {return e.rotation.y},
    prz: function (e) {return e.rotation.z},
    psx: function (e) {return e.scale.x},
    psy: function (e) {return e.scale.y},
    psz: function (e) {return e.scale.z},
    po: function (e) {return e.opacity},
};

var EasingFunctions = {
            // no easing, no acceleration
            linear: function (t) { return t },
            // accelerating from zero velocity
            easeInQuad: function (t) { return t*t },
            // decelerating to zero velocity
            easeOutQuad: function (t) { return t*(2-t) },
            // acceleration until halfway, then deceleration
            easeInOutQuad: function (t) { return t<.5 ? 2*t*t : -1+(4-2*t)*t },
            // accelerating from zero velocity
            easeInCubic: function (t) { return t*t*t },
            // decelerating to zero velocity
            easeOutCubic: function (t) { return (--t)*t*t+1 },
            // acceleration until halfway, then deceleration
            easeInOutCubic: function (t) { return t<.5 ? 4*t*t*t : (t-1)*(2*t-2)*(2*t-2)+1 },
            // accelerating from zero velocity
            easeInQuart: function (t) { return t*t*t*t },
            // decelerating to zero velocity
            easeOutQuart: function (t) { return 1-(--t)*t*t*t },
            // acceleration until halfway, then deceleration
            easeInOutQuart: function (t) { return t<.5 ? 8*t*t*t*t : 1-8*(--t)*t*t*t },
            // accelerating from zero velocity
            easeInQuint: function (t) { return t*t*t*t*t },
            // decelerating to zero velocity
            easeOutQuint: function (t) { return 1+(--t)*t*t*t*t },
            // acceleration until halfway, then deceleration
            easeInOutQuint: function (t) { return t<.5 ? 16*t*t*t*t*t : 1+16*(--t)*t*t*t*t }
        };


function animator(element,motion,val,time,easing){
   var positionval = animator_motion['p'+motion](element);
   var newval = (positionval - val)*(-1);

    animator_render(element,motion,positionval,newval,time,$.now(),easing);
}

function animator_render(element,motion,positionval,val,time,stime,easing){
    var t = ($.now() - stime)/time;
    var value = EasingFunctions[easing](t);
    animator_motion[motion](element,positionval + (value*val));
    if(t < 0.99){
        setTimeout(function () {
            animator_render(element,motion,positionval,val,time,stime,easing);
        },5)
    }
}
