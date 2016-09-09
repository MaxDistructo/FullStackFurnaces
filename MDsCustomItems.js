// MaxDistructo's Custom Items
// By: MaxDistructo
// Github: MaxDistructo
// Last Updated: 
// Version: Beta 0.1
// This will combine the Super OP Armor & Tools Mod with more features that can more easily be expanded upon

//Super OP Armor and Tools Port
var setItem =  ModPE.setItem
var setCraft =  Item.addShapedRecipe
var setBlock = Block.defineBlock
var setArmor = Entity.setArmor
var setDmg = Item.setMaxDamage
var setExplosion = Block.setExplosionResistance
var setDamage = Item.setMaxDamage

setItem(399,"nether_star",0,"Nether Star");
setCraft(399,1,0,[" a ","aba"," a "],["a",155,0,"b",264,0]);

setItem(462,"nether_star",0,"Super Nether Star");
setCraft(462,1,0,["aaa","aaa","aaa"],["a",399,0])

setItem(460,"diamond",0,"Super Diamond");
setCraft(460,1,0,["aaa","aba","aaa"],["a",57,0,"b",264,0]);

setItem(461,"stick",0,"Obsidian Stick")  //Texture Made
setCraft(461,2,0,["a","a"],["a",49,0])

setBlock(207,"Dragon Obsidan",[["dragon_egg",0]],49,false,40);
setCraft(207,1,0,["aaa","aaa","aaa"],["a",49,0]);
setExplosion(207,1000000000000000)

setItem(1499,"fireworks_charge",0,"Un-Refined Dragon Egg Essence");
setCraft(1499,1,0,[" a ","aa ","aaa",],["a",1498,0]);

setItem(463,"fireball",0,"Dragon Egg Essence")
setCraft(463,1,0,["   "," a ","aaa"],["a",1499,0])

setItem(1498,"sword",4,"Super Diamond Sword")
setCraft(1498,1,0,[" a "," a "," b "],["a",460,0,"b",461,0])

setItem(1500,"nether_star_sword",0,"Nether Star Sword:WIP");  //Texture is made
setItem(1501,"nether_star_pick",0,"Nether Star Pickaxe:WIP"); //Texture is made
setItem(1502,"nether_star_axe",0,"Nether Star Axe:WIP");  //Texture is made
setItem(1503,"nether_star_shovel",0,"Nether Star Shovel:WIP"); // Texture Made
setItem(1504,"nether_star_hoe",0,"Nether Star Hoe:WIP"); // Texture Made
setArmor(1505,"helmet",2,"Nether Star Helmet:WIP","armor/nether_star_1.png",12,ArmorType.helmet);
setArmor(1506,"chestplate",2,"Nether Star Chestplate:WIP","armor/nether_star_1.png",16,ArmorType.chestplate);
setArmor(1507,"leggings",2,"Nether Star Leggings:WIP","armor/nether_star_2.png",14,ArmorType.leggings);
setArmor(1508,"boots",2,"Nether Star Boots:WIP","armor/nether_star_1.png.png",6,ArmorType.boots);

setCraft(1500,1,0,[" a "," a "," b "],["a",399,0,"b",461,0])
setCraft(1501,1,0,["aaa"," b "," b "],["a",399,0,"b",461,0])
setCraft(1502,1,0,["aa ","ab "," b "],["a",399,0,"b",461,0])
setCraft(1503,1,0,[" a "," b "," b "],["a",399,0,"b",461,0])
setCraft(1504,1,0,["aa "," b "," b "],["a",399,0,"b",461,0])
setCraft(1505,1,0,["aba","a a","   "],["a",399,0,"b",462,0])
setCraft(1506,1,0,["a a","aba","aaa"],["a",399,0,"b",462,0])
setCraft(1507,1,0,["aba","a a","a a"],["a",399,0,"b",462,0])
setCraft(1508,1,0,["   ","a a","a a"],["a",399,0])

setItem(1509,"ender_dragon_sword",0,"Ender Dragon Sword:WIP");  //Texture is made
setItem(1510,"ender_dragon_pick",0,"Ender Dragon Pickaxe:WIP");  //Texture is made
setItem(1511,"ender_dragon_shovel",0,"Ender Dragon Axe:WIP");  //Texture is made
setItem(1512,"dragon_egg_shovel",0,"Ender Dragon Shovel:WIP") //Texture is made
setItem(1513,"dragon_egg_hoe",0,"Ender Dragon Hoe:WIP") //Texture is made
setArmor(1514,"helmet",1,"Ender Dragon Helmet:WIP","armor/ender_dragon_1.png",15,ArmorType.helmet);
setArmor(1515,"chestplate",1,"Ender Dragon Chestplate:WIP","armor/ender_dragon_1.png",24,ArmorType.chestplate);
setArmor(1516,"leggings",1,"Ender Dragon Leggings:WIP","armor/chain-2.png",21,ArmorType.leggings);
setArmor(1517,"boots",1,"Ender Dragon Boots:WIP","armor/ender_dragon_1.png",12,ArmorType.boots);

setCraft(1509,1,0,[" a "," a "," b "],["a",1499,0,"b",461,0])
setCraft(1510,1,0,["aaa"," b "," b "],["a",1499,0,"b",461,0])
setCraft(1511,1,0,["aa ","ab "," b "],["a",1499,0,"b",461,0])
setCraft(1512,1,0,[" a "," b "," b "],["a",1499,0,"b",461,0])
setCraft(1513,1,0,["aa "," b "," b "],["a",1499,0,"b",461,0])
setCraft(1514,1,0,["aba","a a","   "],["a",1499,0,"b",463,0])
setCraft(1515,1,0,["a a","aba","aaa"],["a",1499,0,"b",463,0])
setCraft(1516,1,0,["aba","a a","a a"],["a",1499,0,"b",463,0])
setCraft(1517,1,0,["   ","a a","a a"],["a",1499,0])

setDamage(1500,5000);
setDamage(1501,5000);
setDamage(1502,5000);
setDamage(1503,5000);
setDamage(1504,5000);
setDamage(1505,10000);
setDamage(1506,10000);
setDamage(1507,10000);
setDamage(1508,10000);
setDamage(1509,10000);
setDamage(1510,10000);
setDamage(1511,10000);
setDamage(1512,10000);
setDamage(1513,10000);
setDamage(1514,100000);
setDamage(1515,100000);
setDamage(1516,100000);
setDamage(1517,100000);

function attackHook(a,v){
  if (Player.getCarriedItem() == 1500)
    if (Player.getCarriedItemData() == 5000)
    Entity.setHealth(victim,Entity.getHealth (victim) - 12.5);
    Entity.getCarriedItem(a,1500),
    Player.getCarriedItemCount(),
    Player.getCarriedItemData()+1
  

    if (Player.getCarriedItem() == 1509)
    if (Player.getCarriedItemData() == 10000)
    Entity.setHealth(victim,Entity.getHealth (victim) - 20);
    Entity.getCarriedItem(a,1509),
    Player.getCarriedItemCount(),
    Player.getCarriedItemData()+1
    
      if (Player.getCarriedItem() == 1498
    if (Player.getCarriedItemData() == 7500)
    Entity.setHealth(victim,Entity.getHealth (victim) - 25);
    Entity.getCarriedItem(a,1498),
    Player.getCarriedItemCount(),
    Player.getCarriedItemData()+1
    
      if (Player.getCarriedItem() == 1501
    if (Player.getCarriedItemData() == 5000)
    Entity.setHealth(victim,Entity.getHealth (victim) - 8);
    Entity.getCarriedItem(a,1501),
    Player.getCarriedItemCount(),
    Player.getCarriedItemData()+1
    
  if (Player.getCarriedItem() == 1502
    if (Player.getCarriedItemData() == 5000)
    Entity.setHealth(victim,Entity.getHealth (victim) - 10);
    Entity.getCarriedItem(a,1502),
    Player.getCarriedItemCount(),
    Player.getCarriedItemData()+1
    
  if (Player.getCarriedItem() == 1503
    if (Player.getCarriedItemData() == 5000)
    Entity.setHealth(victim,Entity.getHealth (victim) - 6);
    Entity.getCarriedItem(a,1503),
    Player.getCarriedItemCount(),
    Player.getCarriedItemData()+1
    
 if (Player.getCarriedItem() == 1510
    if (Player.getCarriedItemData() == 10000)
    Entity.setHealth(victim,Entity.getHealth (victim) - 16);
    Entity.getCarriedItem(a,1510),
    Player.getCarriedItemCount(),
    Player.getCarriedItemData()+1
    
  if (Player.getCarriedItem() == 1511
    if (Player.getCarriedItemData() == 10000)
    Entity.setHealth(victim,Entity.getHealth (victim) - 18);
    Entity.getCarriedItem(a,1511),
    Player.getCarriedItemCount(),
    Player.getCarriedItemData()+1
    
             if (Player.getCarriedItem() == 1512
  var damage = 14
    if (Player.getCarriedItemData() == 10000)
    Entity.setHealth(victim,Entity.getHealth (victim) - 14;
    Entity.getCarriedItem(a,1512),
    Player.getCarriedItemCount(),
    Player.getCarriedItemData()+1
      }else{
  Level.playSoundEnt(a,"random.break",100,10]);
  Player.clearInventorySlot(Player.getSelectedSlotId());
}

function useItem(x,y,z,itemId,blockId,side){
if(itemId==1504&&blockId==3&&side==top)
{
    Entity.getCarriedItem(Player.getEntity(),1504),
    Player.getCarriedItemCount(),
    Player.getCarriedItemData()+1
    Level.setTile(x,y,z,60)
    Level.setTile(x+1,y,z,60)
    Level.setTile(x,y,z+1,60)
    Level.setTile(x-1,y,z,60)
    Level.setTile(x,y,z-1,60)
    Level.setTile(x-1,y,z-1,60)
    Level.setTile(x+1,y,z-1,60)
    Level.setTile(x+1,y,z+1,60)
    Level.setTile(x-1,y,z+1,60)
    Level.playSoundEnt(Player.getEntity,"step.grass",100,10)
    }
    else{
  Level.playSoundEnt(Player.getEntity,"random.break",100,10);
  Player.clearInventorySlot(Player.getSelectedSlotId());
} 
}
