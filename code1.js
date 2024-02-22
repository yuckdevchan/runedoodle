gdjs.menuCode = {};
gdjs.menuCode.GDTransparentButtonWithWhiteBlueBorderObjects1= [];
gdjs.menuCode.GDTransparentButtonWithWhiteBlueBorderObjects2= [];
gdjs.menuCode.GDTransparentButtonWithWhiteBlueBorder2Objects1= [];
gdjs.menuCode.GDTransparentButtonWithWhiteBlueBorder2Objects2= [];
gdjs.menuCode.GDTransparentButtonWithWhiteBlueBorder3Objects1= [];
gdjs.menuCode.GDTransparentButtonWithWhiteBlueBorder3Objects2= [];


gdjs.menuCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("TransparentButtonWithWhiteBlueBorder"), gdjs.menuCode.GDTransparentButtonWithWhiteBlueBorderObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.menuCode.GDTransparentButtonWithWhiteBlueBorderObjects1.length;i<l;++i) {
    if ( gdjs.menuCode.GDTransparentButtonWithWhiteBlueBorderObjects1[i].IsPressed((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.menuCode.GDTransparentButtonWithWhiteBlueBorderObjects1[k] = gdjs.menuCode.GDTransparentButtonWithWhiteBlueBorderObjects1[i];
        ++k;
    }
}
gdjs.menuCode.GDTransparentButtonWithWhiteBlueBorderObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "1", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("TransparentButtonWithWhiteBlueBorder3"), gdjs.menuCode.GDTransparentButtonWithWhiteBlueBorder3Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.menuCode.GDTransparentButtonWithWhiteBlueBorder3Objects1.length;i<l;++i) {
    if ( gdjs.menuCode.GDTransparentButtonWithWhiteBlueBorder3Objects1[i].IsPressed((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.menuCode.GDTransparentButtonWithWhiteBlueBorder3Objects1[k] = gdjs.menuCode.GDTransparentButtonWithWhiteBlueBorder3Objects1[i];
        ++k;
    }
}
gdjs.menuCode.GDTransparentButtonWithWhiteBlueBorder3Objects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.stopGame(runtimeScene);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("TransparentButtonWithWhiteBlueBorder"), gdjs.menuCode.GDTransparentButtonWithWhiteBlueBorderObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.menuCode.GDTransparentButtonWithWhiteBlueBorderObjects1.length;i<l;++i) {
    if ( gdjs.menuCode.GDTransparentButtonWithWhiteBlueBorderObjects1[i].IsHovered((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.menuCode.GDTransparentButtonWithWhiteBlueBorderObjects1[k] = gdjs.menuCode.GDTransparentButtonWithWhiteBlueBorderObjects1[i];
        ++k;
    }
}
gdjs.menuCode.GDTransparentButtonWithWhiteBlueBorderObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.sound.isSoundOnChannelPlaying(runtimeScene, 1));
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "menu_scroll.wav", 1, false, 100, 1);
}}

}


};

gdjs.menuCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.menuCode.GDTransparentButtonWithWhiteBlueBorderObjects1.length = 0;
gdjs.menuCode.GDTransparentButtonWithWhiteBlueBorderObjects2.length = 0;
gdjs.menuCode.GDTransparentButtonWithWhiteBlueBorder2Objects1.length = 0;
gdjs.menuCode.GDTransparentButtonWithWhiteBlueBorder2Objects2.length = 0;
gdjs.menuCode.GDTransparentButtonWithWhiteBlueBorder3Objects1.length = 0;
gdjs.menuCode.GDTransparentButtonWithWhiteBlueBorder3Objects2.length = 0;

gdjs.menuCode.eventsList0(runtimeScene);

return;

}

gdjs['menuCode'] = gdjs.menuCode;
