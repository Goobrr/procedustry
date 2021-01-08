const genBlocks = new Seq;

//change to how many routers you want to be made
var genAmount = 15;


for(var i = 0; i < genAmount; i++){
    var genID = "genRouter-" + i
    var blockName = "Generated Router " + i
    var b = extend(Router, genID, {
        localizedName: blockName,
        description: "This is a generated block with the internal name of " + genID,
        size: 1,
        buildVisibility: BuildVisibility.shown
    });
    genBlocks.add(b);
    print("generated " + genID);
}

// Set the textures, doesn't work in the loop
// TODO: Set icons for generated blocks
Events.on(ClientLoadEvent, () => {
    genBlocks.each(b => {
        b.region = Core.atlas.find("router");
    });
});

print("Generated [stat]" + i + "[] blocks");
