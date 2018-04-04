gdjs.GameCode = {};
gdjs.GameCode.forEachIndex4 = 0;

gdjs.GameCode.forEachIndex5 = 0;

gdjs.GameCode.forEachObjects4 = [];

gdjs.GameCode.forEachObjects5 = [];

gdjs.GameCode.forEachTemporary4 = null;

gdjs.GameCode.forEachTemporary5 = null;

gdjs.GameCode.forEachTotalCount4 = 0;

gdjs.GameCode.forEachTotalCount5 = 0;

gdjs.GameCode.repeatCount5 = 0;

gdjs.GameCode.repeatIndex5 = 0;

gdjs.GameCode.GDPlayerObjects1= [];
gdjs.GameCode.GDPlayerObjects2= [];
gdjs.GameCode.GDPlayerObjects3= [];
gdjs.GameCode.GDPlayerObjects4= [];
gdjs.GameCode.GDPlayerObjects5= [];
gdjs.GameCode.GDRockObjects1= [];
gdjs.GameCode.GDRockObjects2= [];
gdjs.GameCode.GDRockObjects3= [];
gdjs.GameCode.GDRockObjects4= [];
gdjs.GameCode.GDRockObjects5= [];
gdjs.GameCode.GDPlayerBulletObjects1= [];
gdjs.GameCode.GDPlayerBulletObjects2= [];
gdjs.GameCode.GDPlayerBulletObjects3= [];
gdjs.GameCode.GDPlayerBulletObjects4= [];
gdjs.GameCode.GDPlayerBulletObjects5= [];
gdjs.GameCode.GDBlackEnemyObjects1= [];
gdjs.GameCode.GDBlackEnemyObjects2= [];
gdjs.GameCode.GDBlackEnemyObjects3= [];
gdjs.GameCode.GDBlackEnemyObjects4= [];
gdjs.GameCode.GDBlackEnemyObjects5= [];
gdjs.GameCode.GDBlueEnemyObjects1= [];
gdjs.GameCode.GDBlueEnemyObjects2= [];
gdjs.GameCode.GDBlueEnemyObjects3= [];
gdjs.GameCode.GDBlueEnemyObjects4= [];
gdjs.GameCode.GDBlueEnemyObjects5= [];
gdjs.GameCode.GDSpaceBackgroundObjects1= [];
gdjs.GameCode.GDSpaceBackgroundObjects2= [];
gdjs.GameCode.GDSpaceBackgroundObjects3= [];
gdjs.GameCode.GDSpaceBackgroundObjects4= [];
gdjs.GameCode.GDSpaceBackgroundObjects5= [];
gdjs.GameCode.GDPlayerParticleObjects1= [];
gdjs.GameCode.GDPlayerParticleObjects2= [];
gdjs.GameCode.GDPlayerParticleObjects3= [];
gdjs.GameCode.GDPlayerParticleObjects4= [];
gdjs.GameCode.GDPlayerParticleObjects5= [];
gdjs.GameCode.GDGreenEnemyObjects1= [];
gdjs.GameCode.GDGreenEnemyObjects2= [];
gdjs.GameCode.GDGreenEnemyObjects3= [];
gdjs.GameCode.GDGreenEnemyObjects4= [];
gdjs.GameCode.GDGreenEnemyObjects5= [];
gdjs.GameCode.GDEnemyBulletObjects1= [];
gdjs.GameCode.GDEnemyBulletObjects2= [];
gdjs.GameCode.GDEnemyBulletObjects3= [];
gdjs.GameCode.GDEnemyBulletObjects4= [];
gdjs.GameCode.GDEnemyBulletObjects5= [];
gdjs.GameCode.GDEnemyParticleObjects1= [];
gdjs.GameCode.GDEnemyParticleObjects2= [];
gdjs.GameCode.GDEnemyParticleObjects3= [];
gdjs.GameCode.GDEnemyParticleObjects4= [];
gdjs.GameCode.GDEnemyParticleObjects5= [];
gdjs.GameCode.GDGameOverObjects1= [];
gdjs.GameCode.GDGameOverObjects2= [];
gdjs.GameCode.GDGameOverObjects3= [];
gdjs.GameCode.GDGameOverObjects4= [];
gdjs.GameCode.GDGameOverObjects5= [];

gdjs.GameCode.conditionTrue_0 = {val:false};
gdjs.GameCode.condition0IsTrue_0 = {val:false};
gdjs.GameCode.condition1IsTrue_0 = {val:false};
gdjs.GameCode.condition2IsTrue_0 = {val:false};
gdjs.GameCode.conditionTrue_1 = {val:false};
gdjs.GameCode.condition0IsTrue_1 = {val:false};
gdjs.GameCode.condition1IsTrue_1 = {val:false};
gdjs.GameCode.condition2IsTrue_1 = {val:false};


gdjs.GameCode.eventsList0x5e2ee0 = function(runtimeScene, context) {

{


gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.GameCode.condition0IsTrue_0.val) {
gdjs.GameCode.GDRockObjects2.createFrom(runtimeScene.getObjects("Rock"));
{for(var i = 0, len = gdjs.GameCode.GDRockObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDRockObjects2[i].setAngle(gdjs.random(360));
}
}}

}


}; //End of gdjs.GameCode.eventsList0x5e2ee0
gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDPlayerBulletObjects3Objects = Hashtable.newFrom({"PlayerBullet": gdjs.GameCode.GDPlayerBulletObjects3});gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDPlayerBulletObjects3Objects = Hashtable.newFrom({"PlayerBullet": gdjs.GameCode.GDPlayerBulletObjects3});gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDEnemyParticleObjects5Objects = Hashtable.newFrom({"EnemyParticle": gdjs.GameCode.GDEnemyParticleObjects5});gdjs.GameCode.eventsList0x5e3b80 = function(runtimeScene, context) {

}; //End of gdjs.GameCode.eventsList0x5e3b80
gdjs.GameCode.eventsList0x5e3a38 = function(runtimeScene, context) {

{


gdjs.GameCode.repeatCount5 = 20;
for(gdjs.GameCode.repeatIndex5 = 0;gdjs.GameCode.repeatIndex5 < gdjs.GameCode.repeatCount5;++gdjs.GameCode.repeatIndex5) {
gdjs.GameCode.GDPlayerObjects5.createFrom(gdjs.GameCode.GDPlayerObjects3);

gdjs.GameCode.GDEnemyParticleObjects5.length = 0;


if (true)
{
{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDEnemyParticleObjects5Objects, (( gdjs.GameCode.GDPlayerObjects5.length === 0 ) ? 0 :gdjs.GameCode.GDPlayerObjects5[0].getPointX(""))+gdjs.random(20), (( gdjs.GameCode.GDPlayerObjects5.length === 0 ) ? 0 :gdjs.GameCode.GDPlayerObjects5[0].getPointY(""))+gdjs.random(20), "");
}}
}

}


{


{
/* Reuse gdjs.GameCode.GDPlayerObjects3 */
{runtimeScene.getVariables().getFromIndex(0).setNumber(1);
}{for(var i = 0, len = gdjs.GameCode.GDPlayerObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDPlayerObjects3[i].deleteFromScene(runtimeScene);
}
}}

}


}; //End of gdjs.GameCode.eventsList0x5e3a38
gdjs.GameCode.eventsList0x5e3f48 = function(runtimeScene, context) {

}; //End of gdjs.GameCode.eventsList0x5e3f48
gdjs.GameCode.eventsList0x5e4048 = function(runtimeScene, context) {

{

gdjs.GameCode.GDPlayerObjects3.createFrom(runtimeScene.getObjects("Player"));

gdjs.GameCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.GameCode.GDPlayerObjects3.length;i<l;++i) {
    if ( gdjs.GameCode.GDPlayerObjects3[i].getX() > gdjs.evtTools.input.getMouseX(runtimeScene, "",  0)+10 ) {
        gdjs.GameCode.condition0IsTrue_0.val = true;
        gdjs.GameCode.GDPlayerObjects3[k] = gdjs.GameCode.GDPlayerObjects3[i];
        ++k;
    }
}
gdjs.GameCode.GDPlayerObjects3.length = k;}if (gdjs.GameCode.condition0IsTrue_0.val) {
/* Reuse gdjs.GameCode.GDPlayerObjects3 */
{for(var i = 0, len = gdjs.GameCode.GDPlayerObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDPlayerObjects3[i].getBehavior("TopDownMovement").simulateLeftKey();
}
}}

}


{

gdjs.GameCode.GDPlayerObjects3.createFrom(runtimeScene.getObjects("Player"));

gdjs.GameCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.GameCode.GDPlayerObjects3.length;i<l;++i) {
    if ( gdjs.GameCode.GDPlayerObjects3[i].getX() < gdjs.evtTools.input.getMouseX(runtimeScene, "",  0)-10 ) {
        gdjs.GameCode.condition0IsTrue_0.val = true;
        gdjs.GameCode.GDPlayerObjects3[k] = gdjs.GameCode.GDPlayerObjects3[i];
        ++k;
    }
}
gdjs.GameCode.GDPlayerObjects3.length = k;}if (gdjs.GameCode.condition0IsTrue_0.val) {
/* Reuse gdjs.GameCode.GDPlayerObjects3 */
{for(var i = 0, len = gdjs.GameCode.GDPlayerObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDPlayerObjects3[i].getBehavior("TopDownMovement").simulateRightKey();
}
}}

}


{

gdjs.GameCode.GDPlayerObjects3.createFrom(runtimeScene.getObjects("Player"));

gdjs.GameCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.GameCode.GDPlayerObjects3.length;i<l;++i) {
    if ( gdjs.GameCode.GDPlayerObjects3[i].getY() < gdjs.evtTools.input.getMouseY(runtimeScene, "",  0)-10 ) {
        gdjs.GameCode.condition0IsTrue_0.val = true;
        gdjs.GameCode.GDPlayerObjects3[k] = gdjs.GameCode.GDPlayerObjects3[i];
        ++k;
    }
}
gdjs.GameCode.GDPlayerObjects3.length = k;}if (gdjs.GameCode.condition0IsTrue_0.val) {
/* Reuse gdjs.GameCode.GDPlayerObjects3 */
{for(var i = 0, len = gdjs.GameCode.GDPlayerObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDPlayerObjects3[i].getBehavior("TopDownMovement").simulateDownKey();
}
}}

}


{

gdjs.GameCode.GDPlayerObjects2.createFrom(runtimeScene.getObjects("Player"));

gdjs.GameCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.GameCode.GDPlayerObjects2.length;i<l;++i) {
    if ( gdjs.GameCode.GDPlayerObjects2[i].getY() > gdjs.evtTools.input.getMouseY(runtimeScene, "",  0)+10 ) {
        gdjs.GameCode.condition0IsTrue_0.val = true;
        gdjs.GameCode.GDPlayerObjects2[k] = gdjs.GameCode.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.GameCode.GDPlayerObjects2.length = k;}if (gdjs.GameCode.condition0IsTrue_0.val) {
/* Reuse gdjs.GameCode.GDPlayerObjects2 */
{for(var i = 0, len = gdjs.GameCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDPlayerObjects2[i].getBehavior("TopDownMovement").simulateUpKey();
}
}}

}


}; //End of gdjs.GameCode.eventsList0x5e4048
gdjs.GameCode.eventsList0x5e31c8 = function(runtimeScene, context) {

{

gdjs.GameCode.GDPlayerObjects3.createFrom(runtimeScene.getObjects("Player"));

gdjs.GameCode.condition0IsTrue_0.val = false;
gdjs.GameCode.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.GameCode.GDPlayerObjects3.length;i<l;++i) {
    if ( gdjs.GameCode.GDPlayerObjects3[i].getVariableNumber(gdjs.GameCode.GDPlayerObjects3[i].getVariables().getFromIndex(0)) >= 0 ) {
        gdjs.GameCode.condition0IsTrue_0.val = true;
        gdjs.GameCode.GDPlayerObjects3[k] = gdjs.GameCode.GDPlayerObjects3[i];
        ++k;
    }
}
gdjs.GameCode.GDPlayerObjects3.length = k;}if ( gdjs.GameCode.condition0IsTrue_0.val ) {
{
gdjs.GameCode.condition1IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 0.15, "PlayerShootTimer");
}}
if (gdjs.GameCode.condition1IsTrue_0.val) {
/* Reuse gdjs.GameCode.GDPlayerObjects3 */
gdjs.GameCode.GDPlayerBulletObjects3.length = 0;

{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDPlayerBulletObjects3Objects, (( gdjs.GameCode.GDPlayerObjects3.length === 0 ) ? 0 :gdjs.GameCode.GDPlayerObjects3[0].getPointX("")), (( gdjs.GameCode.GDPlayerObjects3.length === 0 ) ? 0 :gdjs.GameCode.GDPlayerObjects3[0].getPointY("")) + 20, "");
}{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDPlayerBulletObjects3Objects, (( gdjs.GameCode.GDPlayerObjects3.length === 0 ) ? 0 :gdjs.GameCode.GDPlayerObjects3[0].getPointX("")), (( gdjs.GameCode.GDPlayerObjects3.length === 0 ) ? 0 :gdjs.GameCode.GDPlayerObjects3[0].getPointY("")) + 80, "");
}{for(var i = 0, len = gdjs.GameCode.GDPlayerBulletObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDPlayerBulletObjects3[i].addForce(1000, 0, 1);
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "sfx_laser1.ogg", false, 5, 1);
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "PlayerShootTimer");
}}

}


{


{
gdjs.GameCode.GDPlayerObjects3.createFrom(runtimeScene.getObjects("Player"));
{for(var i = 0, len = gdjs.GameCode.GDPlayerObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDPlayerObjects3[i].addForce(200, 0, 0);
}
}}

}


{

gdjs.GameCode.GDPlayerObjects3.createFrom(runtimeScene.getObjects("Player"));

gdjs.GameCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.GameCode.GDPlayerObjects3.length;i<l;++i) {
    if ( gdjs.GameCode.GDPlayerObjects3[i].getVariableNumber(gdjs.GameCode.GDPlayerObjects3[i].getVariables().getFromIndex(0)) <= 0 ) {
        gdjs.GameCode.condition0IsTrue_0.val = true;
        gdjs.GameCode.GDPlayerObjects3[k] = gdjs.GameCode.GDPlayerObjects3[i];
        ++k;
    }
}
gdjs.GameCode.GDPlayerObjects3.length = k;}if (gdjs.GameCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.GameCode.eventsList0x5e3a38(runtimeScene, context);} //End of subevents
}

}


{


gdjs.GameCode.eventsList0x5e3f48(runtimeScene, context);
}


{


gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if (gdjs.GameCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.GameCode.eventsList0x5e4048(runtimeScene, context);} //End of subevents
}

}


}; //End of gdjs.GameCode.eventsList0x5e31c8
gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDEnemyBulletObjects5Objects = Hashtable.newFrom({"EnemyBullet": gdjs.GameCode.GDEnemyBulletObjects5});gdjs.GameCode.eventsList0x5e5038 = function(runtimeScene, context) {

}; //End of gdjs.GameCode.eventsList0x5e5038
gdjs.GameCode.eventsList0x5e4e60 = function(runtimeScene, context) {

{

gdjs.GameCode.GDGreenEnemyObjects4.createFrom(gdjs.GameCode.GDGreenEnemyObjects2);


for(gdjs.GameCode.forEachIndex5 = 0;gdjs.GameCode.forEachIndex5 < gdjs.GameCode.GDGreenEnemyObjects4.length;++gdjs.GameCode.forEachIndex5) {
gdjs.GameCode.GDGreenEnemyObjects5.createFrom(gdjs.GameCode.GDGreenEnemyObjects4);

gdjs.GameCode.GDEnemyBulletObjects5.length = 0;


gdjs.GameCode.forEachTemporary5 = gdjs.GameCode.GDGreenEnemyObjects4[gdjs.GameCode.forEachIndex5];
gdjs.GameCode.GDGreenEnemyObjects5.length = 0;
gdjs.GameCode.GDGreenEnemyObjects5.push(gdjs.GameCode.forEachTemporary5);
if (true) {
{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDEnemyBulletObjects5Objects, (( gdjs.GameCode.GDGreenEnemyObjects5.length === 0 ) ? 0 :gdjs.GameCode.GDGreenEnemyObjects5[0].getPointX("")), (( gdjs.GameCode.GDGreenEnemyObjects5.length === 0 ) ? 0 :gdjs.GameCode.GDGreenEnemyObjects5[0].getPointY("Centre")), "");
}{for(var i = 0, len = gdjs.GameCode.GDEnemyBulletObjects5.length ;i < len;++i) {
    gdjs.GameCode.GDEnemyBulletObjects5[i].addForce(-350, 0, 1);
}
}}
}

}


}; //End of gdjs.GameCode.eventsList0x5e4e60
gdjs.GameCode.eventsList0x5e4d88 = function(runtimeScene, context) {

{


gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 0.6, "EnemyShootTimer");
}if (gdjs.GameCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "EnemyShootTimer");
}
{ //Subevents
gdjs.GameCode.eventsList0x5e4e60(runtimeScene, context);} //End of subevents
}

}


}; //End of gdjs.GameCode.eventsList0x5e4d88
gdjs.GameCode.eventsList0x5e52d0 = function(runtimeScene, context) {

{


{
gdjs.GameCode.GDBlueEnemyObjects4.createFrom(gdjs.GameCode.GDBlueEnemyObjects2);

{for(var i = 0, len = gdjs.GameCode.GDBlueEnemyObjects4.length ;i < len;++i) {
    gdjs.GameCode.GDBlueEnemyObjects4[i].addForce(-20, Math.cos(gdjs.evtTools.runtimeScene.getTimeFromStartInSeconds(runtimeScene))*100, 0);
}
}}

}


}; //End of gdjs.GameCode.eventsList0x5e52d0
gdjs.GameCode.eventsList0x5e5530 = function(runtimeScene, context) {

{


{
gdjs.GameCode.GDBlackEnemyObjects4.createFrom(gdjs.GameCode.GDBlackEnemyObjects2);

gdjs.GameCode.GDPlayerObjects4.createFrom(runtimeScene.getObjects("Player"));
{for(var i = 0, len = gdjs.GameCode.GDBlackEnemyObjects4.length ;i < len;++i) {
    gdjs.GameCode.GDBlackEnemyObjects4[i].addForceTowardObject((gdjs.GameCode.GDPlayerObjects4.length !== 0 ? gdjs.GameCode.GDPlayerObjects4[0] : null), 50, 0);
}
}}

}


}; //End of gdjs.GameCode.eventsList0x5e5530
gdjs.GameCode.eventsList0x5e5790 = function(runtimeScene, context) {

{


{
gdjs.GameCode.GDRockObjects3.createFrom(gdjs.GameCode.GDRockObjects2);

{for(var i = 0, len = gdjs.GameCode.GDRockObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDRockObjects3[i].rotate(10, runtimeScene);
}
}}

}


}; //End of gdjs.GameCode.eventsList0x5e5790
gdjs.GameCode.eventsList0x5e4cd0 = function(runtimeScene, context) {

{


gdjs.GameCode.eventsList0x5e4d88(runtimeScene, context);
}


{


gdjs.GameCode.eventsList0x5e52d0(runtimeScene, context);
}


{


gdjs.GameCode.eventsList0x5e5530(runtimeScene, context);
}


{


gdjs.GameCode.eventsList0x5e5790(runtimeScene, context);
}


}; //End of gdjs.GameCode.eventsList0x5e4cd0
gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDPlayerObjects3Objects = Hashtable.newFrom({"Player": gdjs.GameCode.GDPlayerObjects3});gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDRockObjects3ObjectsGDgdjs_46GameCode_46GDBlackEnemyObjects3ObjectsGDgdjs_46GameCode_46GDBlueEnemyObjects3ObjectsGDgdjs_46GameCode_46GDGreenEnemyObjects3Objects = Hashtable.newFrom({"Rock": gdjs.GameCode.GDRockObjects3, "BlackEnemy": gdjs.GameCode.GDBlackEnemyObjects3, "BlueEnemy": gdjs.GameCode.GDBlueEnemyObjects3, "GreenEnemy": gdjs.GameCode.GDGreenEnemyObjects3});gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDEnemyParticleObjects5Objects = Hashtable.newFrom({"EnemyParticle": gdjs.GameCode.GDEnemyParticleObjects5});gdjs.GameCode.eventsList0x5e5e50 = function(runtimeScene, context) {

}; //End of gdjs.GameCode.eventsList0x5e5e50
gdjs.GameCode.eventsList0x5e5b58 = function(runtimeScene, context) {

{


gdjs.GameCode.repeatCount5 = 4;
for(gdjs.GameCode.repeatIndex5 = 0;gdjs.GameCode.repeatIndex5 < gdjs.GameCode.repeatCount5;++gdjs.GameCode.repeatIndex5) {
gdjs.GameCode.GDBlackEnemyObjects5.createFrom(gdjs.GameCode.GDBlackEnemyObjects3);

gdjs.GameCode.GDBlueEnemyObjects5.createFrom(gdjs.GameCode.GDBlueEnemyObjects3);

gdjs.GameCode.GDGreenEnemyObjects5.createFrom(gdjs.GameCode.GDGreenEnemyObjects3);

gdjs.GameCode.GDRockObjects5.createFrom(gdjs.GameCode.GDRockObjects3);

gdjs.GameCode.GDEnemyParticleObjects5.length = 0;


if (true)
{
{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDEnemyParticleObjects5Objects, (( gdjs.GameCode.GDGreenEnemyObjects5.length === 0 ) ? (( gdjs.GameCode.GDBlueEnemyObjects5.length === 0 ) ? (( gdjs.GameCode.GDBlackEnemyObjects5.length === 0 ) ? (( gdjs.GameCode.GDRockObjects5.length === 0 ) ? 0 :gdjs.GameCode.GDRockObjects5[0].getPointX("")) :gdjs.GameCode.GDBlackEnemyObjects5[0].getPointX("")) :gdjs.GameCode.GDBlueEnemyObjects5[0].getPointX("")) :gdjs.GameCode.GDGreenEnemyObjects5[0].getPointX("")), (( gdjs.GameCode.GDGreenEnemyObjects5.length === 0 ) ? (( gdjs.GameCode.GDBlueEnemyObjects5.length === 0 ) ? (( gdjs.GameCode.GDBlackEnemyObjects5.length === 0 ) ? (( gdjs.GameCode.GDRockObjects5.length === 0 ) ? 0 :gdjs.GameCode.GDRockObjects5[0].getPointY("")) :gdjs.GameCode.GDBlackEnemyObjects5[0].getPointY("")) :gdjs.GameCode.GDBlueEnemyObjects5[0].getPointY("")) :gdjs.GameCode.GDGreenEnemyObjects5[0].getPointY("")), "");
}}
}

}


{


{
/* Reuse gdjs.GameCode.GDBlackEnemyObjects3 */
/* Reuse gdjs.GameCode.GDBlueEnemyObjects3 */
/* Reuse gdjs.GameCode.GDGreenEnemyObjects3 */
/* Reuse gdjs.GameCode.GDRockObjects3 */
{for(var i = 0, len = gdjs.GameCode.GDRockObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDRockObjects3[i].deleteFromScene(runtimeScene);
}
for(var i = 0, len = gdjs.GameCode.GDBlackEnemyObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDBlackEnemyObjects3[i].deleteFromScene(runtimeScene);
}
for(var i = 0, len = gdjs.GameCode.GDBlueEnemyObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDBlueEnemyObjects3[i].deleteFromScene(runtimeScene);
}
for(var i = 0, len = gdjs.GameCode.GDGreenEnemyObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDGreenEnemyObjects3[i].deleteFromScene(runtimeScene);
}
}}

}


}; //End of gdjs.GameCode.eventsList0x5e5b58
gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDRockObjects3ObjectsGDgdjs_46GameCode_46GDBlackEnemyObjects3ObjectsGDgdjs_46GameCode_46GDBlueEnemyObjects3ObjectsGDgdjs_46GameCode_46GDGreenEnemyObjects3Objects = Hashtable.newFrom({"Rock": gdjs.GameCode.GDRockObjects3, "BlackEnemy": gdjs.GameCode.GDBlackEnemyObjects3, "BlueEnemy": gdjs.GameCode.GDBlueEnemyObjects3, "GreenEnemy": gdjs.GameCode.GDGreenEnemyObjects3});gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDPlayerBulletObjects3Objects = Hashtable.newFrom({"PlayerBullet": gdjs.GameCode.GDPlayerBulletObjects3});gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDPlayerParticleObjects4Objects = Hashtable.newFrom({"PlayerParticle": gdjs.GameCode.GDPlayerParticleObjects4});gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDPlayerParticleObjects4Objects = Hashtable.newFrom({"PlayerParticle": gdjs.GameCode.GDPlayerParticleObjects4});gdjs.GameCode.eventsList0x5e64a0 = function(runtimeScene, context) {

}; //End of gdjs.GameCode.eventsList0x5e64a0
gdjs.GameCode.eventsList0x5e6290 = function(runtimeScene, context) {

{

/* Reuse gdjs.GameCode.GDPlayerBulletObjects3 */

for(gdjs.GameCode.forEachIndex4 = 0;gdjs.GameCode.forEachIndex4 < gdjs.GameCode.GDPlayerBulletObjects3.length;++gdjs.GameCode.forEachIndex4) {
gdjs.GameCode.GDPlayerBulletObjects4.createFrom(gdjs.GameCode.GDPlayerBulletObjects3);

gdjs.GameCode.GDPlayerParticleObjects4.length = 0;


gdjs.GameCode.forEachTemporary4 = gdjs.GameCode.GDPlayerBulletObjects3[gdjs.GameCode.forEachIndex4];
gdjs.GameCode.GDPlayerBulletObjects4.length = 0;
gdjs.GameCode.GDPlayerBulletObjects4.push(gdjs.GameCode.forEachTemporary4);
if (true) {
{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDPlayerParticleObjects4Objects, (( gdjs.GameCode.GDPlayerBulletObjects4.length === 0 ) ? 0 :gdjs.GameCode.GDPlayerBulletObjects4[0].getPointX("")), (( gdjs.GameCode.GDPlayerBulletObjects4.length === 0 ) ? 0 :gdjs.GameCode.GDPlayerBulletObjects4[0].getPointY("")), "");
}{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDPlayerParticleObjects4Objects, (( gdjs.GameCode.GDPlayerBulletObjects4.length === 0 ) ? 0 :gdjs.GameCode.GDPlayerBulletObjects4[0].getPointX("")), (( gdjs.GameCode.GDPlayerBulletObjects4.length === 0 ) ? 0 :gdjs.GameCode.GDPlayerBulletObjects4[0].getPointY("")), "");
}{for(var i = 0, len = gdjs.GameCode.GDPlayerBulletObjects4.length ;i < len;++i) {
    gdjs.GameCode.GDPlayerBulletObjects4[i].deleteFromScene(runtimeScene);
}
}}
}

}


}; //End of gdjs.GameCode.eventsList0x5e6290
gdjs.GameCode.eventsList0x5e59a0 = function(runtimeScene, context) {

{



}


{

gdjs.GameCode.GDBlackEnemyObjects3.createFrom(gdjs.GameCode.GDBlackEnemyObjects2);

gdjs.GameCode.GDBlueEnemyObjects3.createFrom(gdjs.GameCode.GDBlueEnemyObjects2);

gdjs.GameCode.GDGreenEnemyObjects3.createFrom(gdjs.GameCode.GDGreenEnemyObjects2);

gdjs.GameCode.GDPlayerObjects3.createFrom(runtimeScene.getObjects("Player"));
gdjs.GameCode.GDRockObjects3.createFrom(gdjs.GameCode.GDRockObjects2);


gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDPlayerObjects3Objects, gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDRockObjects3ObjectsGDgdjs_46GameCode_46GDBlackEnemyObjects3ObjectsGDgdjs_46GameCode_46GDBlueEnemyObjects3ObjectsGDgdjs_46GameCode_46GDGreenEnemyObjects3Objects, false, runtimeScene);
}if (gdjs.GameCode.condition0IsTrue_0.val) {
/* Reuse gdjs.GameCode.GDPlayerObjects3 */
{gdjs.evtTools.sound.playSound(runtimeScene, "sfx_shieldDown.ogg", false, 100, 1);
}{for(var i = 0, len = gdjs.GameCode.GDPlayerObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDPlayerObjects3[i].returnVariable(gdjs.GameCode.GDPlayerObjects3[i].getVariables().getFromIndex(0)).sub(1);
}
}
{ //Subevents
gdjs.GameCode.eventsList0x5e5b58(runtimeScene, context);} //End of subevents
}

}


{



}


{

gdjs.GameCode.GDBlackEnemyObjects3.createFrom(gdjs.GameCode.GDBlackEnemyObjects2);

gdjs.GameCode.GDBlueEnemyObjects3.createFrom(gdjs.GameCode.GDBlueEnemyObjects2);

gdjs.GameCode.GDGreenEnemyObjects3.createFrom(gdjs.GameCode.GDGreenEnemyObjects2);

gdjs.GameCode.GDPlayerBulletObjects3.createFrom(runtimeScene.getObjects("PlayerBullet"));
gdjs.GameCode.GDRockObjects3.createFrom(gdjs.GameCode.GDRockObjects2);


gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDRockObjects3ObjectsGDgdjs_46GameCode_46GDBlackEnemyObjects3ObjectsGDgdjs_46GameCode_46GDBlueEnemyObjects3ObjectsGDgdjs_46GameCode_46GDGreenEnemyObjects3Objects, gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDPlayerBulletObjects3Objects, false, runtimeScene);
}if (gdjs.GameCode.condition0IsTrue_0.val) {
/* Reuse gdjs.GameCode.GDBlackEnemyObjects3 */
/* Reuse gdjs.GameCode.GDBlueEnemyObjects3 */
/* Reuse gdjs.GameCode.GDGreenEnemyObjects3 */
/* Reuse gdjs.GameCode.GDRockObjects3 */
{for(var i = 0, len = gdjs.GameCode.GDRockObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDRockObjects3[i].returnVariable(gdjs.GameCode.GDRockObjects3[i].getVariables().get("Life")).sub(1);
}
for(var i = 0, len = gdjs.GameCode.GDBlackEnemyObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDBlackEnemyObjects3[i].returnVariable(gdjs.GameCode.GDBlackEnemyObjects3[i].getVariables().get("Life")).sub(1);
}
for(var i = 0, len = gdjs.GameCode.GDBlueEnemyObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDBlueEnemyObjects3[i].returnVariable(gdjs.GameCode.GDBlueEnemyObjects3[i].getVariables().get("Life")).sub(1);
}
for(var i = 0, len = gdjs.GameCode.GDGreenEnemyObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDGreenEnemyObjects3[i].returnVariable(gdjs.GameCode.GDGreenEnemyObjects3[i].getVariables().get("Life")).sub(1);
}
}
{ //Subevents
gdjs.GameCode.eventsList0x5e6290(runtimeScene, context);} //End of subevents
}

}


{

gdjs.GameCode.GDBlackEnemyObjects3.createFrom(gdjs.GameCode.GDBlackEnemyObjects2);

gdjs.GameCode.GDBlueEnemyObjects3.createFrom(gdjs.GameCode.GDBlueEnemyObjects2);

gdjs.GameCode.GDGreenEnemyObjects3.createFrom(gdjs.GameCode.GDGreenEnemyObjects2);

gdjs.GameCode.GDRockObjects3.createFrom(gdjs.GameCode.GDRockObjects2);


gdjs.GameCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.GameCode.GDRockObjects3.length;i<l;++i) {
    if ( gdjs.GameCode.GDRockObjects3[i].getVariableNumber(gdjs.GameCode.GDRockObjects3[i].getVariables().get("Life")) == 0 ) {
        gdjs.GameCode.condition0IsTrue_0.val = true;
        gdjs.GameCode.GDRockObjects3[k] = gdjs.GameCode.GDRockObjects3[i];
        ++k;
    }
}
gdjs.GameCode.GDRockObjects3.length = k;for(var i = 0, k = 0, l = gdjs.GameCode.GDBlackEnemyObjects3.length;i<l;++i) {
    if ( gdjs.GameCode.GDBlackEnemyObjects3[i].getVariableNumber(gdjs.GameCode.GDBlackEnemyObjects3[i].getVariables().get("Life")) == 0 ) {
        gdjs.GameCode.condition0IsTrue_0.val = true;
        gdjs.GameCode.GDBlackEnemyObjects3[k] = gdjs.GameCode.GDBlackEnemyObjects3[i];
        ++k;
    }
}
gdjs.GameCode.GDBlackEnemyObjects3.length = k;for(var i = 0, k = 0, l = gdjs.GameCode.GDBlueEnemyObjects3.length;i<l;++i) {
    if ( gdjs.GameCode.GDBlueEnemyObjects3[i].getVariableNumber(gdjs.GameCode.GDBlueEnemyObjects3[i].getVariables().get("Life")) == 0 ) {
        gdjs.GameCode.condition0IsTrue_0.val = true;
        gdjs.GameCode.GDBlueEnemyObjects3[k] = gdjs.GameCode.GDBlueEnemyObjects3[i];
        ++k;
    }
}
gdjs.GameCode.GDBlueEnemyObjects3.length = k;for(var i = 0, k = 0, l = gdjs.GameCode.GDGreenEnemyObjects3.length;i<l;++i) {
    if ( gdjs.GameCode.GDGreenEnemyObjects3[i].getVariableNumber(gdjs.GameCode.GDGreenEnemyObjects3[i].getVariables().get("Life")) == 0 ) {
        gdjs.GameCode.condition0IsTrue_0.val = true;
        gdjs.GameCode.GDGreenEnemyObjects3[k] = gdjs.GameCode.GDGreenEnemyObjects3[i];
        ++k;
    }
}
gdjs.GameCode.GDGreenEnemyObjects3.length = k;}if (gdjs.GameCode.condition0IsTrue_0.val) {
/* Reuse gdjs.GameCode.GDBlackEnemyObjects3 */
/* Reuse gdjs.GameCode.GDBlueEnemyObjects3 */
/* Reuse gdjs.GameCode.GDGreenEnemyObjects3 */
/* Reuse gdjs.GameCode.GDRockObjects3 */
{gdjs.evtTools.sound.playSound(runtimeScene, "sfx_twoTone.ogg", false, 20, 1);
}{for(var i = 0, len = gdjs.GameCode.GDRockObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDRockObjects3[i].deleteFromScene(runtimeScene);
}
for(var i = 0, len = gdjs.GameCode.GDBlackEnemyObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDBlackEnemyObjects3[i].deleteFromScene(runtimeScene);
}
for(var i = 0, len = gdjs.GameCode.GDBlueEnemyObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDBlueEnemyObjects3[i].deleteFromScene(runtimeScene);
}
for(var i = 0, len = gdjs.GameCode.GDGreenEnemyObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDGreenEnemyObjects3[i].deleteFromScene(runtimeScene);
}
}}

}


{

/* Reuse gdjs.GameCode.GDBlackEnemyObjects2 */
/* Reuse gdjs.GameCode.GDBlueEnemyObjects2 */
/* Reuse gdjs.GameCode.GDGreenEnemyObjects2 */
/* Reuse gdjs.GameCode.GDRockObjects2 */

gdjs.GameCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.GameCode.GDRockObjects2.length;i<l;++i) {
    if ( gdjs.GameCode.GDRockObjects2[i].getX() < gdjs.evtTools.camera.getCameraX(runtimeScene, "",  0) - gdjs.evtTools.camera.getCameraWidth(runtimeScene, "",  0) ) {
        gdjs.GameCode.condition0IsTrue_0.val = true;
        gdjs.GameCode.GDRockObjects2[k] = gdjs.GameCode.GDRockObjects2[i];
        ++k;
    }
}
gdjs.GameCode.GDRockObjects2.length = k;for(var i = 0, k = 0, l = gdjs.GameCode.GDBlackEnemyObjects2.length;i<l;++i) {
    if ( gdjs.GameCode.GDBlackEnemyObjects2[i].getX() < gdjs.evtTools.camera.getCameraX(runtimeScene, "",  0) - gdjs.evtTools.camera.getCameraWidth(runtimeScene, "",  0) ) {
        gdjs.GameCode.condition0IsTrue_0.val = true;
        gdjs.GameCode.GDBlackEnemyObjects2[k] = gdjs.GameCode.GDBlackEnemyObjects2[i];
        ++k;
    }
}
gdjs.GameCode.GDBlackEnemyObjects2.length = k;for(var i = 0, k = 0, l = gdjs.GameCode.GDBlueEnemyObjects2.length;i<l;++i) {
    if ( gdjs.GameCode.GDBlueEnemyObjects2[i].getX() < gdjs.evtTools.camera.getCameraX(runtimeScene, "",  0) - gdjs.evtTools.camera.getCameraWidth(runtimeScene, "",  0) ) {
        gdjs.GameCode.condition0IsTrue_0.val = true;
        gdjs.GameCode.GDBlueEnemyObjects2[k] = gdjs.GameCode.GDBlueEnemyObjects2[i];
        ++k;
    }
}
gdjs.GameCode.GDBlueEnemyObjects2.length = k;for(var i = 0, k = 0, l = gdjs.GameCode.GDGreenEnemyObjects2.length;i<l;++i) {
    if ( gdjs.GameCode.GDGreenEnemyObjects2[i].getX() < gdjs.evtTools.camera.getCameraX(runtimeScene, "",  0) - gdjs.evtTools.camera.getCameraWidth(runtimeScene, "",  0) ) {
        gdjs.GameCode.condition0IsTrue_0.val = true;
        gdjs.GameCode.GDGreenEnemyObjects2[k] = gdjs.GameCode.GDGreenEnemyObjects2[i];
        ++k;
    }
}
gdjs.GameCode.GDGreenEnemyObjects2.length = k;}if (gdjs.GameCode.condition0IsTrue_0.val) {
/* Reuse gdjs.GameCode.GDBlackEnemyObjects2 */
/* Reuse gdjs.GameCode.GDBlueEnemyObjects2 */
/* Reuse gdjs.GameCode.GDGreenEnemyObjects2 */
/* Reuse gdjs.GameCode.GDRockObjects2 */
{for(var i = 0, len = gdjs.GameCode.GDRockObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDRockObjects2[i].deleteFromScene(runtimeScene);
}
for(var i = 0, len = gdjs.GameCode.GDBlackEnemyObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDBlackEnemyObjects2[i].deleteFromScene(runtimeScene);
}
for(var i = 0, len = gdjs.GameCode.GDBlueEnemyObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDBlueEnemyObjects2[i].deleteFromScene(runtimeScene);
}
for(var i = 0, len = gdjs.GameCode.GDGreenEnemyObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDGreenEnemyObjects2[i].deleteFromScene(runtimeScene);
}
}}

}


}; //End of gdjs.GameCode.eventsList0x5e59a0
gdjs.GameCode.eventsList0x5e4b90 = function(runtimeScene, context) {

{


gdjs.GameCode.eventsList0x5e4cd0(runtimeScene, context);
}


{


gdjs.GameCode.eventsList0x5e59a0(runtimeScene, context);
}


}; //End of gdjs.GameCode.eventsList0x5e4b90
gdjs.GameCode.eventsList0x5e4ab8 = function(runtimeScene, context) {

{

gdjs.GameCode.GDBlackEnemyObjects2.createFrom(runtimeScene.getObjects("BlackEnemy"));
gdjs.GameCode.GDBlueEnemyObjects2.createFrom(runtimeScene.getObjects("BlueEnemy"));
gdjs.GameCode.GDGreenEnemyObjects2.createFrom(runtimeScene.getObjects("GreenEnemy"));
gdjs.GameCode.GDRockObjects2.createFrom(runtimeScene.getObjects("Rock"));

gdjs.GameCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.GameCode.GDRockObjects2.length;i<l;++i) {
    if ( gdjs.GameCode.GDRockObjects2[i].getX() < gdjs.evtTools.camera.getCameraX(runtimeScene, "",  0) + gdjs.evtTools.camera.getCameraWidth(runtimeScene, "",  0) ) {
        gdjs.GameCode.condition0IsTrue_0.val = true;
        gdjs.GameCode.GDRockObjects2[k] = gdjs.GameCode.GDRockObjects2[i];
        ++k;
    }
}
gdjs.GameCode.GDRockObjects2.length = k;for(var i = 0, k = 0, l = gdjs.GameCode.GDBlackEnemyObjects2.length;i<l;++i) {
    if ( gdjs.GameCode.GDBlackEnemyObjects2[i].getX() < gdjs.evtTools.camera.getCameraX(runtimeScene, "",  0) + gdjs.evtTools.camera.getCameraWidth(runtimeScene, "",  0) ) {
        gdjs.GameCode.condition0IsTrue_0.val = true;
        gdjs.GameCode.GDBlackEnemyObjects2[k] = gdjs.GameCode.GDBlackEnemyObjects2[i];
        ++k;
    }
}
gdjs.GameCode.GDBlackEnemyObjects2.length = k;for(var i = 0, k = 0, l = gdjs.GameCode.GDBlueEnemyObjects2.length;i<l;++i) {
    if ( gdjs.GameCode.GDBlueEnemyObjects2[i].getX() < gdjs.evtTools.camera.getCameraX(runtimeScene, "",  0) + gdjs.evtTools.camera.getCameraWidth(runtimeScene, "",  0) ) {
        gdjs.GameCode.condition0IsTrue_0.val = true;
        gdjs.GameCode.GDBlueEnemyObjects2[k] = gdjs.GameCode.GDBlueEnemyObjects2[i];
        ++k;
    }
}
gdjs.GameCode.GDBlueEnemyObjects2.length = k;for(var i = 0, k = 0, l = gdjs.GameCode.GDGreenEnemyObjects2.length;i<l;++i) {
    if ( gdjs.GameCode.GDGreenEnemyObjects2[i].getX() < gdjs.evtTools.camera.getCameraX(runtimeScene, "",  0) + gdjs.evtTools.camera.getCameraWidth(runtimeScene, "",  0) ) {
        gdjs.GameCode.condition0IsTrue_0.val = true;
        gdjs.GameCode.GDGreenEnemyObjects2[k] = gdjs.GameCode.GDGreenEnemyObjects2[i];
        ++k;
    }
}
gdjs.GameCode.GDGreenEnemyObjects2.length = k;}if (gdjs.GameCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.GameCode.eventsList0x5e4b90(runtimeScene, context);} //End of subevents
}

}


}; //End of gdjs.GameCode.eventsList0x5e4ab8
gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDPlayerObjects2Objects = Hashtable.newFrom({"Player": gdjs.GameCode.GDPlayerObjects2});gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDEnemyBulletObjects2Objects = Hashtable.newFrom({"EnemyBullet": gdjs.GameCode.GDEnemyBulletObjects2});gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDEnemyParticleObjects2Objects = Hashtable.newFrom({"EnemyParticle": gdjs.GameCode.GDEnemyParticleObjects2});gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDEnemyParticleObjects2Objects = Hashtable.newFrom({"EnemyParticle": gdjs.GameCode.GDEnemyParticleObjects2});gdjs.GameCode.eventsList0x5e6e20 = function(runtimeScene, context) {

{

gdjs.GameCode.GDEnemyBulletObjects2.createFrom(runtimeScene.getObjects("EnemyBullet"));
gdjs.GameCode.GDPlayerObjects2.createFrom(runtimeScene.getObjects("Player"));

gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDPlayerObjects2Objects, gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDEnemyBulletObjects2Objects, false, runtimeScene);
}if (gdjs.GameCode.condition0IsTrue_0.val) {
/* Reuse gdjs.GameCode.GDEnemyBulletObjects2 */
/* Reuse gdjs.GameCode.GDPlayerObjects2 */
gdjs.GameCode.GDEnemyParticleObjects2.length = 0;

{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDEnemyParticleObjects2Objects, (( gdjs.GameCode.GDEnemyBulletObjects2.length === 0 ) ? 0 :gdjs.GameCode.GDEnemyBulletObjects2[0].getPointX("")), (( gdjs.GameCode.GDEnemyBulletObjects2.length === 0 ) ? 0 :gdjs.GameCode.GDEnemyBulletObjects2[0].getPointY("")), "");
}{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDEnemyParticleObjects2Objects, (( gdjs.GameCode.GDEnemyBulletObjects2.length === 0 ) ? 0 :gdjs.GameCode.GDEnemyBulletObjects2[0].getPointX("")), (( gdjs.GameCode.GDEnemyBulletObjects2.length === 0 ) ? 0 :gdjs.GameCode.GDEnemyBulletObjects2[0].getPointY("")), "");
}{for(var i = 0, len = gdjs.GameCode.GDEnemyBulletObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDEnemyBulletObjects2[i].deleteFromScene(runtimeScene);
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "sfx_shieldDown.ogg", false, 20, 1);
}{for(var i = 0, len = gdjs.GameCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDPlayerObjects2[i].returnVariable(gdjs.GameCode.GDPlayerObjects2[i].getVariables().getFromIndex(0)).sub(1);
}
}}

}


}; //End of gdjs.GameCode.eventsList0x5e6e20
gdjs.GameCode.eventsList0x5e74c0 = function(runtimeScene, context) {

{

gdjs.GameCode.GDEnemyParticleObjects3.createFrom(runtimeScene.getObjects("EnemyParticle"));
gdjs.GameCode.GDPlayerParticleObjects3.createFrom(runtimeScene.getObjects("PlayerParticle"));

gdjs.GameCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.GameCode.GDPlayerParticleObjects3.length;i<l;++i) {
    if ( gdjs.GameCode.GDPlayerParticleObjects3[i].getOpacity() <= 0 ) {
        gdjs.GameCode.condition0IsTrue_0.val = true;
        gdjs.GameCode.GDPlayerParticleObjects3[k] = gdjs.GameCode.GDPlayerParticleObjects3[i];
        ++k;
    }
}
gdjs.GameCode.GDPlayerParticleObjects3.length = k;for(var i = 0, k = 0, l = gdjs.GameCode.GDEnemyParticleObjects3.length;i<l;++i) {
    if ( gdjs.GameCode.GDEnemyParticleObjects3[i].getOpacity() <= 0 ) {
        gdjs.GameCode.condition0IsTrue_0.val = true;
        gdjs.GameCode.GDEnemyParticleObjects3[k] = gdjs.GameCode.GDEnemyParticleObjects3[i];
        ++k;
    }
}
gdjs.GameCode.GDEnemyParticleObjects3.length = k;}if (gdjs.GameCode.condition0IsTrue_0.val) {
/* Reuse gdjs.GameCode.GDEnemyParticleObjects3 */
/* Reuse gdjs.GameCode.GDPlayerParticleObjects3 */
{for(var i = 0, len = gdjs.GameCode.GDPlayerParticleObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDPlayerParticleObjects3[i].deleteFromScene(runtimeScene);
}
for(var i = 0, len = gdjs.GameCode.GDEnemyParticleObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDEnemyParticleObjects3[i].deleteFromScene(runtimeScene);
}
}}

}


{

gdjs.GameCode.GDEnemyParticleObjects3.createFrom(runtimeScene.getObjects("EnemyParticle"));
gdjs.GameCode.GDPlayerParticleObjects3.createFrom(runtimeScene.getObjects("PlayerParticle"));

gdjs.GameCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.GameCode.GDPlayerParticleObjects3.length;i<l;++i) {
    if ( gdjs.GameCode.GDPlayerParticleObjects3[i].hasNoForces() ) {
        gdjs.GameCode.condition0IsTrue_0.val = true;
        gdjs.GameCode.GDPlayerParticleObjects3[k] = gdjs.GameCode.GDPlayerParticleObjects3[i];
        ++k;
    }
}
gdjs.GameCode.GDPlayerParticleObjects3.length = k;for(var i = 0, k = 0, l = gdjs.GameCode.GDEnemyParticleObjects3.length;i<l;++i) {
    if ( gdjs.GameCode.GDEnemyParticleObjects3[i].hasNoForces() ) {
        gdjs.GameCode.condition0IsTrue_0.val = true;
        gdjs.GameCode.GDEnemyParticleObjects3[k] = gdjs.GameCode.GDEnemyParticleObjects3[i];
        ++k;
    }
}
gdjs.GameCode.GDEnemyParticleObjects3.length = k;}if (gdjs.GameCode.condition0IsTrue_0.val) {
/* Reuse gdjs.GameCode.GDEnemyParticleObjects3 */
/* Reuse gdjs.GameCode.GDPlayerParticleObjects3 */
{for(var i = 0, len = gdjs.GameCode.GDPlayerParticleObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDPlayerParticleObjects3[i].setZOrder(100);
}
for(var i = 0, len = gdjs.GameCode.GDEnemyParticleObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDEnemyParticleObjects3[i].setZOrder(100);
}
}{for(var i = 0, len = gdjs.GameCode.GDPlayerParticleObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDPlayerParticleObjects3[i].addPolarForce(-30+gdjs.random(60), 100+gdjs.random(40), 1);
}
for(var i = 0, len = gdjs.GameCode.GDEnemyParticleObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDEnemyParticleObjects3[i].addPolarForce(-30+gdjs.random(60), 100+gdjs.random(40), 1);
}
}{for(var i = 0, len = gdjs.GameCode.GDPlayerParticleObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDPlayerParticleObjects3[i].setAnimation(gdjs.random(2));
}
for(var i = 0, len = gdjs.GameCode.GDEnemyParticleObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDEnemyParticleObjects3[i].setAnimation(gdjs.random(2));
}
}{for(var i = 0, len = gdjs.GameCode.GDPlayerParticleObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDPlayerParticleObjects3[i].setScale(0.3+gdjs.random(5)/10);
}
for(var i = 0, len = gdjs.GameCode.GDEnemyParticleObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDEnemyParticleObjects3[i].setScale(0.3+gdjs.random(5)/10);
}
}}

}


{


{
gdjs.GameCode.GDEnemyParticleObjects2.createFrom(runtimeScene.getObjects("EnemyParticle"));
gdjs.GameCode.GDPlayerParticleObjects2.createFrom(runtimeScene.getObjects("PlayerParticle"));
{for(var i = 0, len = gdjs.GameCode.GDPlayerParticleObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDPlayerParticleObjects2[i].setOpacity(gdjs.GameCode.GDPlayerParticleObjects2[i].getOpacity() - (380*gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene)));
}
for(var i = 0, len = gdjs.GameCode.GDEnemyParticleObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDEnemyParticleObjects2[i].setOpacity(gdjs.GameCode.GDEnemyParticleObjects2[i].getOpacity() - (380*gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene)));
}
}}

}


}; //End of gdjs.GameCode.eventsList0x5e74c0
gdjs.GameCode.eventsList0x5e7ca0 = function(runtimeScene, context) {

{


{
gdjs.GameCode.GDSpaceBackgroundObjects1.createFrom(runtimeScene.getObjects("SpaceBackground"));
{for(var i = 0, len = gdjs.GameCode.GDSpaceBackgroundObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDSpaceBackgroundObjects1[i].setXOffset(gdjs.GameCode.GDSpaceBackgroundObjects1[i].getXOffset() + (100*gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene)));
}
}}

}


}; //End of gdjs.GameCode.eventsList0x5e7ca0
gdjs.GameCode.eventsList0x5e2668 = function(runtimeScene, context) {

{


{
{gdjs.evtTools.camera.hideLayer(runtimeScene, "GameOver");
}}

}


{


{
{gdjs.evtTools.camera.setCameraX(runtimeScene, gdjs.evtTools.camera.getCameraX(runtimeScene, "", 0) + (200*gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene)), "", 0);
}}

}


{


gdjs.GameCode.eventsList0x5e2ee0(runtimeScene, context);
}


{


gdjs.GameCode.eventsList0x5e31c8(runtimeScene, context);
}


{


gdjs.GameCode.eventsList0x5e4ab8(runtimeScene, context);
}


{


gdjs.GameCode.eventsList0x5e6e20(runtimeScene, context);
}


{


gdjs.GameCode.eventsList0x5e74c0(runtimeScene, context);
}


{


gdjs.GameCode.eventsList0x5e7ca0(runtimeScene, context);
}


}; //End of gdjs.GameCode.eventsList0x5e2668
gdjs.GameCode.eventsList0x5e2bc8 = function(runtimeScene, context) {

{


gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("Pause")) == 0;
}if (gdjs.GameCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.GameCode.eventsList0x5e2668(runtimeScene, context);} //End of subevents
}

}


}; //End of gdjs.GameCode.eventsList0x5e2bc8
gdjs.GameCode.eventsList0x5e8010 = function(runtimeScene, context) {

{


gdjs.GameCode.condition0IsTrue_0.val = false;
{
{gdjs.GameCode.conditionTrue_1 = gdjs.GameCode.condition0IsTrue_0;
gdjs.GameCode.conditionTrue_1.val = context.triggerOnce(6193556);
}
}if (gdjs.GameCode.condition0IsTrue_0.val) {
gdjs.GameCode.GDGameOverObjects2.createFrom(runtimeScene.getObjects("GameOver"));
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "GameOver");
}{for(var i = 0, len = gdjs.GameCode.GDGameOverObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDGameOverObjects2[i].setOpacity(0);
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "sfx_lose.ogg", false, 100, 1);
}}

}


{


{
gdjs.GameCode.GDGameOverObjects2.createFrom(runtimeScene.getObjects("GameOver"));
{gdjs.evtTools.camera.showLayer(runtimeScene, "GameOver");
}{for(var i = 0, len = gdjs.GameCode.GDGameOverObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDGameOverObjects2[i].setOpacity(gdjs.GameCode.GDGameOverObjects2[i].getOpacity() + (255*gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene)));
}
}}

}


{


gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 2.5, "GameOver");
}if (gdjs.GameCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Game", false);
}}

}


}; //End of gdjs.GameCode.eventsList0x5e8010
gdjs.GameCode.eventsList0x5e7f38 = function(runtimeScene, context) {

{


gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) == 1;
}if (gdjs.GameCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.GameCode.eventsList0x5e8010(runtimeScene, context);} //End of subevents
}

}


}; //End of gdjs.GameCode.eventsList0x5e7f38
gdjs.GameCode.eventsList0xa88a0 = function(runtimeScene, context) {

{


gdjs.GameCode.eventsList0x5e2bc8(runtimeScene, context);
}


{


gdjs.GameCode.eventsList0x5e7f38(runtimeScene, context);
}


}; //End of gdjs.GameCode.eventsList0xa88a0


gdjs.GameCode.func = function(runtimeScene, context) {
context.startNewFrame();
gdjs.GameCode.GDPlayerObjects1.length = 0;
gdjs.GameCode.GDPlayerObjects2.length = 0;
gdjs.GameCode.GDPlayerObjects3.length = 0;
gdjs.GameCode.GDPlayerObjects4.length = 0;
gdjs.GameCode.GDPlayerObjects5.length = 0;
gdjs.GameCode.GDRockObjects1.length = 0;
gdjs.GameCode.GDRockObjects2.length = 0;
gdjs.GameCode.GDRockObjects3.length = 0;
gdjs.GameCode.GDRockObjects4.length = 0;
gdjs.GameCode.GDRockObjects5.length = 0;
gdjs.GameCode.GDPlayerBulletObjects1.length = 0;
gdjs.GameCode.GDPlayerBulletObjects2.length = 0;
gdjs.GameCode.GDPlayerBulletObjects3.length = 0;
gdjs.GameCode.GDPlayerBulletObjects4.length = 0;
gdjs.GameCode.GDPlayerBulletObjects5.length = 0;
gdjs.GameCode.GDBlackEnemyObjects1.length = 0;
gdjs.GameCode.GDBlackEnemyObjects2.length = 0;
gdjs.GameCode.GDBlackEnemyObjects3.length = 0;
gdjs.GameCode.GDBlackEnemyObjects4.length = 0;
gdjs.GameCode.GDBlackEnemyObjects5.length = 0;
gdjs.GameCode.GDBlueEnemyObjects1.length = 0;
gdjs.GameCode.GDBlueEnemyObjects2.length = 0;
gdjs.GameCode.GDBlueEnemyObjects3.length = 0;
gdjs.GameCode.GDBlueEnemyObjects4.length = 0;
gdjs.GameCode.GDBlueEnemyObjects5.length = 0;
gdjs.GameCode.GDSpaceBackgroundObjects1.length = 0;
gdjs.GameCode.GDSpaceBackgroundObjects2.length = 0;
gdjs.GameCode.GDSpaceBackgroundObjects3.length = 0;
gdjs.GameCode.GDSpaceBackgroundObjects4.length = 0;
gdjs.GameCode.GDSpaceBackgroundObjects5.length = 0;
gdjs.GameCode.GDPlayerParticleObjects1.length = 0;
gdjs.GameCode.GDPlayerParticleObjects2.length = 0;
gdjs.GameCode.GDPlayerParticleObjects3.length = 0;
gdjs.GameCode.GDPlayerParticleObjects4.length = 0;
gdjs.GameCode.GDPlayerParticleObjects5.length = 0;
gdjs.GameCode.GDGreenEnemyObjects1.length = 0;
gdjs.GameCode.GDGreenEnemyObjects2.length = 0;
gdjs.GameCode.GDGreenEnemyObjects3.length = 0;
gdjs.GameCode.GDGreenEnemyObjects4.length = 0;
gdjs.GameCode.GDGreenEnemyObjects5.length = 0;
gdjs.GameCode.GDEnemyBulletObjects1.length = 0;
gdjs.GameCode.GDEnemyBulletObjects2.length = 0;
gdjs.GameCode.GDEnemyBulletObjects3.length = 0;
gdjs.GameCode.GDEnemyBulletObjects4.length = 0;
gdjs.GameCode.GDEnemyBulletObjects5.length = 0;
gdjs.GameCode.GDEnemyParticleObjects1.length = 0;
gdjs.GameCode.GDEnemyParticleObjects2.length = 0;
gdjs.GameCode.GDEnemyParticleObjects3.length = 0;
gdjs.GameCode.GDEnemyParticleObjects4.length = 0;
gdjs.GameCode.GDEnemyParticleObjects5.length = 0;
gdjs.GameCode.GDGameOverObjects1.length = 0;
gdjs.GameCode.GDGameOverObjects2.length = 0;
gdjs.GameCode.GDGameOverObjects3.length = 0;
gdjs.GameCode.GDGameOverObjects4.length = 0;
gdjs.GameCode.GDGameOverObjects5.length = 0;

gdjs.GameCode.eventsList0xa88a0(runtimeScene, context);return;
}
gdjs['GameCode']= gdjs.GameCode;
