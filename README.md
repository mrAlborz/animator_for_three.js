# Easing Animator for three.js

move , rotate , change opacity And scale
version 1.0;

Example:

    animator( mesh Or material ,'action',value,time,'easeInOutCubic');

 
# guide

    animator( 1 , '2' , 3 , 4 , '5' );

1 : mesh or material => example :  

          mymesh = new THREE.Mesh( Geometry, material );
          animator( mymesh ,'action',value,time,'easeInOutCubic');
          
2 :
    'x' => Moving on the X axis
    'y' => Moving on the Y axis
    'z' => Moving on the Z axis
    
    'rx' => Rotate on the X axis
    'ry' => Rotate on the Y axis
    'rz' => Rotate on the Z axis
    
    'sx' => scale on the X axis
    'sy' => scale on the Y axis
    'sz' => scale on the Z axis
    
    'o' => opacity [0 , 1]
    
3 : value like 100 for move Or 0.8 for opacity

4 : time on millisecend

5 : choose easing Methods 
    list of easings:
    
            'linear'
            'easeInQuad'
            'easeOutQuad'
            'easeInOutQuad'
            'easeInCubic'
            'easeOutCubic'
            'easeInOutCubic'
            'easeInQuart'
            'easeOutQuart'
            'easeInOutQuart'
            'easeInQuint'
            'easeOutQuint'
            'easeInOutQuint'
