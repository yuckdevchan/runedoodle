gdjs._49Code = {};
gdjs._49Code.GDPlayerObjects1= [];
gdjs._49Code.GDPlayerObjects2= [];
gdjs._49Code.GDfloorwallObjects1= [];
gdjs._49Code.GDfloorwallObjects2= [];
gdjs._49Code.GDNewSpriteObjects1= [];
gdjs._49Code.GDNewSpriteObjects2= [];
gdjs._49Code.GDplatform2Objects1= [];
gdjs._49Code.GDplatform2Objects2= [];
gdjs._49Code.GDcake_9595signObjects1= [];
gdjs._49Code.GDcake_9595signObjects2= [];
gdjs._49Code.GDYou_9595Can_9595Double_9595Jump_9595Objects1= [];
gdjs._49Code.GDYou_9595Can_9595Double_9595Jump_9595Objects2= [];
gdjs._49Code.GDNewSprite2Objects1= [];
gdjs._49Code.GDNewSprite2Objects2= [];
gdjs._49Code.GDPortal1Objects1= [];
gdjs._49Code.GDPortal1Objects2= [];
gdjs._49Code.GDPortal2Objects1= [];
gdjs._49Code.GDPortal2Objects2= [];
gdjs._49Code.GDrealwall2Objects1= [];
gdjs._49Code.GDrealwall2Objects2= [];
gdjs._49Code.GDTransparentButtonWithWhiteBlueBorderObjects1= [];
gdjs._49Code.GDTransparentButtonWithWhiteBlueBorderObjects2= [];
gdjs._49Code.GDTransparentButtonWithWhiteBlueBorder2Objects1= [];
gdjs._49Code.GDTransparentButtonWithWhiteBlueBorder2Objects2= [];
gdjs._49Code.GDTransparentButtonWithWhiteBlueBorder3Objects1= [];
gdjs._49Code.GDTransparentButtonWithWhiteBlueBorder3Objects2= [];
gdjs._49Code.GDTransparentButtonWithWhiteBlueBorder4Objects1= [];
gdjs._49Code.GDTransparentButtonWithWhiteBlueBorder4Objects2= [];


gdjs._49Code.mapOfGDgdjs_9546_959549Code_9546GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs._49Code.GDPlayerObjects1});
gdjs._49Code.mapOfGDgdjs_9546_959549Code_9546GDPortal1Objects1Objects = Hashtable.newFrom({"Portal1": gdjs._49Code.GDPortal1Objects1});
gdjs._49Code.asyncCallback10547908 = function (runtimeScene, asyncObjectsList) {
{gdjs.evtTools.sound.playMusicOnChannel(runtimeScene, "Valve theme remix [EQos0vJsLrU].mp3", 1, false, 100, 1);
}}
gdjs._49Code.eventsList0 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(2), (runtimeScene) => (gdjs._49Code.asyncCallback10547908(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs._49Code.eventsList1 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs._49Code.GDPlayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._49Code.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs._49Code.GDPlayerObjects1[i].getBehavior("KonamiCode").KC_Inputted((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs._49Code.GDPlayerObjects1[k] = gdjs._49Code.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs._49Code.GDPlayerObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs._49Code.GDPlayerObjects1 */
{for(var i = 0, len = gdjs._49Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs._49Code.GDPlayerObjects1[i].activateBehavior("PlatformerObject", false);
}
}{for(var i = 0, len = gdjs._49Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs._49Code.GDPlayerObjects1[i].activateBehavior("TopDownMovement", true);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs._49Code.GDPlayerObjects1);
{for(var i = 0, len = gdjs._49Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs._49Code.GDPlayerObjects1[i].activateBehavior("TopDownMovement", false);
}
}{gdjs.evtTools.sound.playMusicOnChannel(runtimeScene, "Running in the 90s (Initial D) - Medieval Style with Latin Choir [N2S9tXo6Nzw].mp3", 1, false, 100, 1);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "a");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs._49Code.GDPlayerObjects1);
{for(var i = 0, len = gdjs._49Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs._49Code.GDPlayerObjects1[i].getBehavior("Flippable").flipX(true);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "d");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs._49Code.GDPlayerObjects1);
{for(var i = 0, len = gdjs._49Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs._49Code.GDPlayerObjects1[i].getBehavior("Flippable").flipX(false);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "a");
if (isConditionTrue_0) {
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs._49Code.GDPlayerObjects1);
gdjs.copyArray(runtimeScene.getObjects("Portal1"), gdjs._49Code.GDPortal1Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs._49Code.mapOfGDgdjs_9546_959549Code_9546GDPlayerObjects1Objects, gdjs._49Code.mapOfGDgdjs_9546_959549Code_9546GDPortal1Objects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs._49Code.GDPlayerObjects1 */
/* Reuse gdjs._49Code.GDPortal1Objects1 */
gdjs.copyArray(runtimeScene.getObjects("Portal2"), gdjs._49Code.GDPortal2Objects1);
{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber((( gdjs._49Code.GDPlayerObjects1.length === 0 ) ? 0 :gdjs._49Code.GDPlayerObjects1[0].getBehavior("PlatformerObject").getCurrentSpeed()));
}{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber((( gdjs._49Code.GDPlayerObjects1.length === 0 ) ? 0 :gdjs._49Code.GDPlayerObjects1[0].getAngleToObject((gdjs._49Code.GDPortal1Objects1.length !== 0 ? gdjs._49Code.GDPortal1Objects1[0] : null))));
}{for(var i = 0, len = gdjs._49Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs._49Code.GDPlayerObjects1[i].setPosition((( gdjs._49Code.GDPortal2Objects1.length === 0 ) ? 0 :gdjs._49Code.GDPortal2Objects1[0].getPointX("")),(( gdjs._49Code.GDPortal2Objects1.length === 0 ) ? 0 :gdjs._49Code.GDPortal2Objects1[0].getPointY("")));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("TransparentButtonWithWhiteBlueBorder3"), gdjs._49Code.GDTransparentButtonWithWhiteBlueBorder3Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._49Code.GDTransparentButtonWithWhiteBlueBorder3Objects1.length;i<l;++i) {
    if ( gdjs._49Code.GDTransparentButtonWithWhiteBlueBorder3Objects1[i].IsPressed((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs._49Code.GDTransparentButtonWithWhiteBlueBorder3Objects1[k] = gdjs._49Code.GDTransparentButtonWithWhiteBlueBorder3Objects1[i];
        ++k;
    }
}
gdjs._49Code.GDTransparentButtonWithWhiteBlueBorder3Objects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("TransparentButtonWithWhiteBlueBorder"), gdjs._49Code.GDTransparentButtonWithWhiteBlueBorderObjects1);
gdjs.copyArray(runtimeScene.getObjects("TransparentButtonWithWhiteBlueBorder2"), gdjs._49Code.GDTransparentButtonWithWhiteBlueBorder2Objects1);
/* Reuse gdjs._49Code.GDTransparentButtonWithWhiteBlueBorder3Objects1 */
{for(var i = 0, len = gdjs._49Code.GDTransparentButtonWithWhiteBlueBorderObjects1.length ;i < len;++i) {
    gdjs._49Code.GDTransparentButtonWithWhiteBlueBorderObjects1[i].setPosition(843,2670);
}
}{for(var i = 0, len = gdjs._49Code.GDTransparentButtonWithWhiteBlueBorder2Objects1.length ;i < len;++i) {
    gdjs._49Code.GDTransparentButtonWithWhiteBlueBorder2Objects1[i].setPosition(843,2670);
}
}{for(var i = 0, len = gdjs._49Code.GDTransparentButtonWithWhiteBlueBorder3Objects1.length ;i < len;++i) {
    gdjs._49Code.GDTransparentButtonWithWhiteBlueBorder3Objects1[i].setPosition(843,2670);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Escape");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("TransparentButtonWithWhiteBlueBorder"), gdjs._49Code.GDTransparentButtonWithWhiteBlueBorderObjects1);
gdjs.copyArray(runtimeScene.getObjects("TransparentButtonWithWhiteBlueBorder2"), gdjs._49Code.GDTransparentButtonWithWhiteBlueBorder2Objects1);
gdjs.copyArray(runtimeScene.getObjects("TransparentButtonWithWhiteBlueBorder3"), gdjs._49Code.GDTransparentButtonWithWhiteBlueBorder3Objects1);
gdjs.copyArray(runtimeScene.getObjects("TransparentButtonWithWhiteBlueBorder4"), gdjs._49Code.GDTransparentButtonWithWhiteBlueBorder4Objects1);
{for(var i = 0, len = gdjs._49Code.GDTransparentButtonWithWhiteBlueBorderObjects1.length ;i < len;++i) {
    gdjs._49Code.GDTransparentButtonWithWhiteBlueBorderObjects1[i].setPosition(gdjs.evtTools.input.getCursorX(runtimeScene, "", 0) - 172,gdjs.evtTools.input.getCursorY(runtimeScene, "", 0) - 49.5);
}
}{for(var i = 0, len = gdjs._49Code.GDTransparentButtonWithWhiteBlueBorder2Objects1.length ;i < len;++i) {
    gdjs._49Code.GDTransparentButtonWithWhiteBlueBorder2Objects1[i].setPosition(gdjs.evtTools.input.getCursorX(runtimeScene, "", 0) - 172,gdjs.evtTools.input.getCursorY(runtimeScene, "", 0) + 49.5);
}
}{for(var i = 0, len = gdjs._49Code.GDTransparentButtonWithWhiteBlueBorder3Objects1.length ;i < len;++i) {
    gdjs._49Code.GDTransparentButtonWithWhiteBlueBorder3Objects1[i].setPosition(gdjs.evtTools.input.getCursorX(runtimeScene, "", 0) - 172,gdjs.evtTools.input.getCursorY(runtimeScene, "", 0) + 148.5);
}
}{for(var i = 0, len = gdjs._49Code.GDTransparentButtonWithWhiteBlueBorder4Objects1.length ;i < len;++i) {
    gdjs._49Code.GDTransparentButtonWithWhiteBlueBorder4Objects1[i].setY(gdjs.evtTools.input.getCursorX(runtimeScene, "", 0) + 155);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("TransparentButtonWithWhiteBlueBorder"), gdjs._49Code.GDTransparentButtonWithWhiteBlueBorderObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._49Code.GDTransparentButtonWithWhiteBlueBorderObjects1.length;i<l;++i) {
    if ( gdjs._49Code.GDTransparentButtonWithWhiteBlueBorderObjects1[i].IsPressed((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs._49Code.GDTransparentButtonWithWhiteBlueBorderObjects1[k] = gdjs._49Code.GDTransparentButtonWithWhiteBlueBorderObjects1[i];
        ++k;
    }
}
gdjs._49Code.GDTransparentButtonWithWhiteBlueBorderObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "menu", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("TransparentButtonWithWhiteBlueBorder4"), gdjs._49Code.GDTransparentButtonWithWhiteBlueBorder4Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._49Code.GDTransparentButtonWithWhiteBlueBorder4Objects1.length;i<l;++i) {
    if ( gdjs._49Code.GDTransparentButtonWithWhiteBlueBorder4Objects1[i].IsPressed((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs._49Code.GDTransparentButtonWithWhiteBlueBorder4Objects1[k] = gdjs._49Code.GDTransparentButtonWithWhiteBlueBorder4Objects1[i];
        ++k;
    }
}
gdjs._49Code.GDTransparentButtonWithWhiteBlueBorder4Objects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs._49Code.GDPlayerObjects1);
{for(var i = 0, len = gdjs._49Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs._49Code.GDPlayerObjects1[i].getBehavior("Animation").setAnimationIndex(1);
}
}{gdjs.evtTools.sound.stopMusicOnChannel(runtimeScene, 1);
}
{ //Subevents
gdjs._49Code.eventsList0(runtimeScene);} //End of subevents
}

}


};

gdjs._49Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs._49Code.GDPlayerObjects1.length = 0;
gdjs._49Code.GDPlayerObjects2.length = 0;
gdjs._49Code.GDfloorwallObjects1.length = 0;
gdjs._49Code.GDfloorwallObjects2.length = 0;
gdjs._49Code.GDNewSpriteObjects1.length = 0;
gdjs._49Code.GDNewSpriteObjects2.length = 0;
gdjs._49Code.GDplatform2Objects1.length = 0;
gdjs._49Code.GDplatform2Objects2.length = 0;
gdjs._49Code.GDcake_9595signObjects1.length = 0;
gdjs._49Code.GDcake_9595signObjects2.length = 0;
gdjs._49Code.GDYou_9595Can_9595Double_9595Jump_9595Objects1.length = 0;
gdjs._49Code.GDYou_9595Can_9595Double_9595Jump_9595Objects2.length = 0;
gdjs._49Code.GDNewSprite2Objects1.length = 0;
gdjs._49Code.GDNewSprite2Objects2.length = 0;
gdjs._49Code.GDPortal1Objects1.length = 0;
gdjs._49Code.GDPortal1Objects2.length = 0;
gdjs._49Code.GDPortal2Objects1.length = 0;
gdjs._49Code.GDPortal2Objects2.length = 0;
gdjs._49Code.GDrealwall2Objects1.length = 0;
gdjs._49Code.GDrealwall2Objects2.length = 0;
gdjs._49Code.GDTransparentButtonWithWhiteBlueBorderObjects1.length = 0;
gdjs._49Code.GDTransparentButtonWithWhiteBlueBorderObjects2.length = 0;
gdjs._49Code.GDTransparentButtonWithWhiteBlueBorder2Objects1.length = 0;
gdjs._49Code.GDTransparentButtonWithWhiteBlueBorder2Objects2.length = 0;
gdjs._49Code.GDTransparentButtonWithWhiteBlueBorder3Objects1.length = 0;
gdjs._49Code.GDTransparentButtonWithWhiteBlueBorder3Objects2.length = 0;
gdjs._49Code.GDTransparentButtonWithWhiteBlueBorder4Objects1.length = 0;
gdjs._49Code.GDTransparentButtonWithWhiteBlueBorder4Objects2.length = 0;

gdjs._49Code.eventsList1(runtimeScene);

return;

}

gdjs['_49Code'] = gdjs._49Code;
