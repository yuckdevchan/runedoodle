
gdjs.evtsExt__KonamiCode__KonamiCode = gdjs.evtsExt__KonamiCode__KonamiCode || {};

/**
 * Behavior generated from Konami Code
 */
gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode = class KonamiCode extends gdjs.RuntimeBehavior {
  constructor(instanceContainer, behaviorData, owner) {
    super(instanceContainer, behaviorData, owner);
    this._runtimeScene = instanceContainer;

    this._onceTriggers = new gdjs.OnceTriggers();
    this._behaviorData = {};
    this._sharedData = gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.getSharedData(
      instanceContainer,
      behaviorData.name
    );
    
  }

  // Hot-reload:
  updateFromBehaviorData(oldBehaviorData, newBehaviorData) {
    

    return true;
  }

  // Properties:
  
}

/**
 * Shared data generated from Konami Code
 */
gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.SharedData = class KonamiCodeSharedData {
  constructor(sharedData) {
    
  }
  
  // Shared properties:
  
}

gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.getSharedData = function(instanceContainer, behaviorName) {
  if (!instanceContainer._KonamiCode_KonamiCodeSharedData) {
    const initialData = instanceContainer.getInitialSharedDataForBehavior(
      behaviorName
    );
    instanceContainer._KonamiCode_KonamiCodeSharedData = new gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.SharedData(
      initialData
    );
  }
  return instanceContainer._KonamiCode_KonamiCodeSharedData;
}

// Methods:
gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext = {};
gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.GDObjectObjects1= [];
gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.GDObjectObjects2= [];
gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.GDObjectObjects3= [];
gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.GDObjectObjects4= [];


gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().get("KC_KeyPressed")) == "Up";
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getOnceTriggers().triggerOnce(11119884);
}
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().get("KC").add(1);
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "KC_InputTimer");
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().get("KC_KeyPressed")) != "Up";
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getOnceTriggers().triggerOnce(11120820);
}
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().get("KC").setNumber(0);
}}

}


};gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().get("KC_KeyPressed")) == "Up";
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getOnceTriggers().triggerOnce(11123388);
}
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().get("KC").add(1);
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "KC_InputTimer");
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().get("KC_KeyPressed")) != "Up";
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getOnceTriggers().triggerOnce(11124324);
}
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().get("KC").setNumber(0);
}}

}


};gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.eventsList2 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().get("KC_KeyPressed")) == "Up";
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getOnceTriggers().triggerOnce(11128636);
}
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().get("KC_LastKeyIsUp").setString("True");
}}

}


};gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.eventsList3 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().get("KC_KeyPressed")) == "Down";
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getOnceTriggers().triggerOnce(11126884);
}
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().get("KC").add(1);
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "KC_InputTimer");
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().get("KC_KeyPressed")) != "Down";
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getOnceTriggers().triggerOnce(11127820);
}
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().get("KC").setNumber(0);
}
{ //Subevents
gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.eventsList2(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.eventsList4 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().get("KC_KeyPressed")) == "Up";
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getOnceTriggers().triggerOnce(11132988);
}
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().get("KC_LastKeyIsUp").setString("True");
}}

}


};gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.eventsList5 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().get("KC_KeyPressed")) == "Down";
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getOnceTriggers().triggerOnce(11131236);
}
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().get("KC").add(1);
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "KC_InputTimer");
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().get("KC_KeyPressed")) != "Down";
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getOnceTriggers().triggerOnce(11132172);
}
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().get("KC").setNumber(0);
}
{ //Subevents
gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.eventsList4(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.eventsList6 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().get("KC_KeyPressed")) == "Up";
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getOnceTriggers().triggerOnce(11137260);
}
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().get("KC_LastKeyIsUp").setString("True");
}}

}


};gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.eventsList7 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().get("KC_KeyPressed")) == "Left";
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getOnceTriggers().triggerOnce(11135508);
}
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().get("KC").add(1);
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "KC_InputTimer");
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().get("KC_KeyPressed")) != "Left";
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getOnceTriggers().triggerOnce(11136444);
}
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().get("KC").setNumber(0);
}
{ //Subevents
gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.eventsList6(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.eventsList8 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().get("KC_KeyPressed")) == "Up";
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getOnceTriggers().triggerOnce(11141532);
}
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().get("KC_LastKeyIsUp").setString("True");
}}

}


};gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.eventsList9 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().get("KC_KeyPressed")) == "Right";
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getOnceTriggers().triggerOnce(11139780);
}
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().get("KC").add(1);
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "KC_InputTimer");
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().get("KC_KeyPressed")) != "Right";
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getOnceTriggers().triggerOnce(11140716);
}
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().get("KC").setNumber(0);
}
{ //Subevents
gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.eventsList8(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.eventsList10 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().get("KC_KeyPressed")) == "Up";
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getOnceTriggers().triggerOnce(11145956);
}
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().get("KC_LastKeyIsUp").setString("True");
}}

}


};gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.eventsList11 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().get("KC_KeyPressed")) == "Left";
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getOnceTriggers().triggerOnce(11144204);
}
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().get("KC").add(1);
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "KC_InputTimer");
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().get("KC_KeyPressed")) != "Left";
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getOnceTriggers().triggerOnce(11145140);
}
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().get("KC").setNumber(0);
}
{ //Subevents
gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.eventsList10(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.eventsList12 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().get("KC_KeyPressed")) == "Up";
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getOnceTriggers().triggerOnce(11150228);
}
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().get("KC_LastKeyIsUp").setString("True");
}}

}


};gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.eventsList13 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().get("KC_KeyPressed")) == "Right";
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getOnceTriggers().triggerOnce(11148476);
}
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().get("KC").add(1);
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "KC_InputTimer");
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().get("KC_KeyPressed")) != "Right";
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getOnceTriggers().triggerOnce(11149412);
}
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().get("KC").setNumber(0);
}
{ //Subevents
gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.eventsList12(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.eventsList14 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().get("KC_KeyPressed")) == "Up";
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getOnceTriggers().triggerOnce(11154500);
}
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().get("KC_LastKeyIsUp").setString("True");
}}

}


};gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.eventsList15 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().get("KC_KeyPressed")) == "b";
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getOnceTriggers().triggerOnce(11152748);
}
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().get("KC").add(1);
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "KC_InputTimer");
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().get("KC_KeyPressed")) != "b";
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getOnceTriggers().triggerOnce(11153684);
}
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().get("KC").setNumber(0);
}
{ //Subevents
gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.eventsList14(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.eventsList16 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().get("KC_KeyPressed")) == "Up";
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getOnceTriggers().triggerOnce(11158836);
}
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().get("KC_LastKeyIsUp").setString("True");
}}

}


};gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.eventsList17 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().get("KC_KeyPressed")) == "a";
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getOnceTriggers().triggerOnce(11157020);
}
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().get("KC").add(1);
}{gdjs.evtTools.runtimeScene.removeTimer(runtimeScene, "KC_InputTimer");
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().get("KC_KeyPressed")) != "a";
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getOnceTriggers().triggerOnce(11157692);
}
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().get("KC").setNumber(0);
}
{ //Subevents
gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.eventsList16(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.eventsList18 = function(runtimeScene, eventsFunctionContext) {

{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("KC")) == 0;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().get("KC_LastKeyIsUp")) == "False";
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.anyKeyPressed(runtimeScene);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getOnceTriggers().triggerOnce(11119252);
}
}
}
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.eventsList0(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("KC")) == 1;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Up");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getOnceTriggers().triggerOnce(11121324);
}
}
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().get("KC").add(1);
}}

}


{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("KC")) == 2;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.anyKeyPressed(runtimeScene);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getOnceTriggers().triggerOnce(11122716);
}
}
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.eventsList1(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("KC")) == 3;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Up");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getOnceTriggers().triggerOnce(11125148);
}
}
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().get("KC").add(1);
}}

}


{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("KC")) == 4;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.anyKeyPressed(runtimeScene);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getOnceTriggers().triggerOnce(11126212);
}
}
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.eventsList3(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("KC")) == 5;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Down");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getOnceTriggers().triggerOnce(11129420);
}
}
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().get("KC").add(1);
}}

}


{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("KC")) == 6;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.anyKeyPressed(runtimeScene);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getOnceTriggers().triggerOnce(11130564);
}
}
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.eventsList5(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("KC")) == 7;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Down");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getOnceTriggers().triggerOnce(11133772);
}
}
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().get("KC").add(1);
}}

}


{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("KC")) == 8;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.anyKeyPressed(runtimeScene);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getOnceTriggers().triggerOnce(11134836);
}
}
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.eventsList7(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("KC")) == 9;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getOnceTriggers().triggerOnce(11138044);
}
}
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().get("KC").add(1);
}}

}


{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("KC")) == 10;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.anyKeyPressed(runtimeScene);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getOnceTriggers().triggerOnce(11139108);
}
}
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.eventsList9(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("KC")) == 11;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Right");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getOnceTriggers().triggerOnce(11142468);
}
}
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().get("KC").add(1);
}}

}


{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("KC")) == 12;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.anyKeyPressed(runtimeScene);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getOnceTriggers().triggerOnce(11143532);
}
}
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.eventsList11(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("KC")) == 13;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getOnceTriggers().triggerOnce(11146740);
}
}
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().get("KC").add(1);
}}

}


{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("KC")) == 14;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.anyKeyPressed(runtimeScene);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getOnceTriggers().triggerOnce(11147804);
}
}
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.eventsList13(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("KC")) == 15;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Right");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getOnceTriggers().triggerOnce(11151012);
}
}
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().get("KC").add(1);
}}

}


{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("KC")) == 16;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.anyKeyPressed(runtimeScene);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getOnceTriggers().triggerOnce(11152076);
}
}
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.eventsList15(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("KC")) == 17;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "b");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getOnceTriggers().triggerOnce(11155284);
}
}
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().get("KC").add(1);
}}

}


{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("KC")) == 18;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.anyKeyPressed(runtimeScene);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getOnceTriggers().triggerOnce(11156348);
}
}
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.eventsList17(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("KC")) == 19;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "a");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getOnceTriggers().triggerOnce(11159020);
}
}
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().get("KC").add(1);
}{runtimeScene.getScene().getVariables().get("KC_IsCompleted").setString("True");
}}

}


};gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.eventsList19 = function(runtimeScene, eventsFunctionContext) {

{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getOnceTriggers().triggerOnce(11113748);
}
if (isConditionTrue_0) {
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = false; }}{runtimeScene.getScene().getVariables().get("KC").setNumber(0);
}{runtimeScene.getScene().getVariables().get("KC_IsCompleted").setString("False");
}{runtimeScene.getScene().getVariables().get("KC_LastKeyIsUp").setString("False");
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "KC_InputTimer");
}}

}


{


let isConditionTrue_0 = false;
{
{runtimeScene.getScene().getVariables().get("KC_KeyPressed").setString(gdjs.evtTools.input.lastPressedKey(runtimeScene));
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("KC")) == 0;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getOnceTriggers().triggerOnce(11115380);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "KC_InputTimer");
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().get("KC_LastKeyIsUp")) == "True";
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getOnceTriggers().triggerOnce(11116652);
}
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().get("KC_KeyPressed").setString("NoDirection");
}{runtimeScene.getScene().getVariables().get("KC_LastKeyIsUp").setString("False");
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 1.5, "KC_InputTimer");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getOnceTriggers().triggerOnce(11117748);
}
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().get("KC").setNumber(0);
}}

}


{


gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.eventsList18(runtimeScene, eventsFunctionContext);
}


};gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.eventsList20 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.eventsList19(runtimeScene, eventsFunctionContext);
}


};

gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEvents = function(parentEventsFunctionContext) {
this._onceTriggers.startNewFrame();
var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.GDObjectObjects3.length = 0;
gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.GDObjectObjects4.length = 0;

gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.eventsList20(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.KC_InputtedContext = {};
gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.KC_InputtedContext.GDObjectObjects1= [];
gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.KC_InputtedContext.GDObjectObjects2= [];


gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.KC_InputtedContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().get("KC_IsCompleted")) == "True";
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.KC_InputtedContext.GDObjectObjects1);
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = true; }}{for(var i = 0, len = gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.KC_InputtedContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.KC_InputtedContext.GDObjectObjects1[i].activateBehavior(eventsFunctionContext.getBehaviorName("Behavior"), false);
}
}}

}


};

gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.KC_Inputted = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.KC_InputtedContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.KC_InputtedContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.KC_InputtedContext.eventsList0(runtimeScene, eventsFunctionContext);

return !!eventsFunctionContext.returnValue;
}


gdjs.registerBehavior("KonamiCode::KonamiCode", gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode);
