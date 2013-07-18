/*!
 * jQuery Geezit Plugin v 1.2
 * https://github.com/bernabas/jquery-geezit
 *
 * Copyright 2013 Bernabas Dagnachew
 * Released under the MIT License
 */

(function ($) {    
    var keyboard = '{"h":"ህ","ህe":"ሀ","ህu":"ሁ","ህi":"ሂ","ህa":"ሃ","ሀe":"ሄ","ህE":"ሄ","ህo":"ሆ","ህW":"ኋ","ህh":"ኅ","ህ2":"ኅ","ኅe":"ኅ","ኅu":"ኁ","ኅi":"ኂ","ኅa":"ኃ","ኀe":"ኄ","ኅE":"ኄ","ኅo":"ኆ","ኅW":"ኋ","ኋe":"ኈ","ኋu":"ኍ","ኋi":"ኊ","ኋa":"ኋ","ኈe":"ኌ","ኋE":"ኌ","ኋ\'":"ኍ","l":"ል","L":"ል","ልe":"ለ","ልu":"ሉ","ልi":"ሊ","ልa":"ላ","ለe":"ሌ","ልE":"ሌ","ልo":"ሎ","ልW":"ሏ","ሏa":"ሏ","H":"ሕ","ሕe":"ሐ","ሕu":"ሑ","ሕi":"ሒ","ሕa":"ሓ","ሐe":"ሔ","ሕE":"ሔ","ሕo":"ሖ","ሕW":"ሗ","ሗa":"ሗ","m":"ም","M":"ም","ምe":"መ","ምu":"ሙ","ምi":"ሚ","ምa":"ማ","መe":"ሜ","ምE":"ሜ","ምo":"ሞ","ምW":"ሟ","ሟa":"ሟ","ምY":"ፙ","ፘa":"ፙ","r":"ር","R":"ር","ርe":"ረ","ርu":"ሩ","ርi":"ሪ","ርa":"ራ","ረe":"ሬ","ርE":"ሬ","ርo":"ሮ","ርW":"ሯ","ሯa":"ሯ","ርY":"ፘ","s":"ስ","ስe":"ሰ","ስu":"ሱ","ስi":"ሲ","ስa":"ሳ","ሰe":"ሴ","ስE":"ሴ","ስo":"ሶ","ስW":"ሷ","ሷa":"ሷ","ስs":"ሥ","ስ2":"ሥ","ሥe":"ሠ","ሥu":"ሡ","ሥi":"ሢ","ሥa":"ሣ","ሠe":"ሤ","ሥE":"ሤ","ሥo":"ሦ","ሥW":"ሧ","ሧa":"ሧ","x":"ሽ","X":"ሽ","ሽe":"ሸ","ሽu":"ሹ","ሽi":"ሺ","ሽa":"ሻ","ሸe":"ሼ","ሽE":"ሼ","ሽo":"ሾ","ሽW":"ሿ","ሿa":"ሿ","q":"ቅ","ቅe":"ቀ","ቅu":"ቁ","ቅi":"ቂ","ቅa":"ቃ","ቀe":"ቄ","ቅE":"ቄ","ቅo":"ቆ","ቅW":"ቋ","ቋe":"ቈ","ቋu":"ቍ","ቋi":"ቊ","ቋa":"ቋ","ቈe":"ቌ","ቋE":"ቌ","ቋ\'":"ቍ","Q":"ቕ","ቕe":"ቐ","ቕu":"ቑ","ቕi":"ቒ","ቕa":"ቓ","ቐe":"ቔ","ቕE":"ቔ","ቕo":"ቖ","ቕW":"ቛ","ቛe":"ቘ","ቛu":"ቘ","ቛi":"ቚ","ቛa":"ቛ","ቘe":"ቜ","ቛe":"ቜ","ቛa":"ቝ","b":"ብ","B":"ብ","ብe":"በ","ብu":"ቡ","ብi":"ቢ","ብa":"ባ","በe":"ቤ","ብE":"ቤ","ብo":"ቦ","ብW":"ቧ","ቧa":"ቧ","v":"ቭ","V":"ቭ","ቭe":"ቨ","ቭu":"ቩ","ቪi":"ቩ","ቭa":"ቫ","ቭE":"ቬ","ቭE":"ቬ","ቭo":"ቮ","ቭW":"ቯ","ቯa":"ቯ","t":"ት","ትe":"ተ","ትu":"ቱ","ትi":"ቲ","ትa":"ታ","ተe":"ቴ","ትE":"ቴ","ትo":"ቶ","ትW":"ቷ","ትW":"ቷ","c":"ች","ችe":"ቸ","ችu":"ቹ","ችi":"ቺ","ችa":"ቻ","ቸe":"ቼ","ችE":"ቼ","ችo":"ቾ","ችW":"ቿ","ቿa":"ቿ","n":"ን","ንe":"ነ","ንu":"ኑ","ንi":"ኒ","ንa":"ና","ነe":"ኔ","ንE":"ኔ","ንo":"ኖ","ንW":"ኗ","ኗa":"ኗ","N":"ኝ","ኝe":"ኘ","ኝu":"ኙ","ኝi":"ኚ","ኝa":"ኛ","ኘe":"ኜ","ኝE":"ኜ","ኝo":"ኞ","ኝW":"ኟ","ኟa":"ኟ","a":"አ","u":"ኡ","U":"ኡ","i":"ኢ","A":"ኣ","E":"ኤ","e":"እ","I":"እ","እe":"ዕ","ዕe":"ዐ","እa":"ኧ","o":"ኦ","O":"ኦ","አa":"ዓ","አe":"ዐ","አ2":"ዐ","ኡu":"ዑ","ኡU":"ዑ","ኡ2":"ዑ","ኢi":"ዒ","ኢ2":"ዒ","ኣa":"ዓ","ኣA":"ዓ","ኣ2":"ዓ","ኤE":"ዔ","ኤ2":"ዔ","እI":"ዕ","እ2":"ዕ","ኦo":"ዖ","ኦO":"ዖ","ኦ2":"ዖ","k":"ክ","ክe":"ከ","ክu":"ኩ","ክi":"ኪ","ክa":"ካ","ከe":"ኬ","ክE":"ኬ","ክo":"ኮ","ክW":"ኳ","ኳe":"ኰ","ኮo":"ኰ","ኳu":"ኵ","ኳi":"ኲ","ኳa":"ኳ","ኰe":"ኴ","ኳE":"ኴ","ኳ\'":"ኵ","K":"ኽ","ኽe":"ኸ","ኽu":"ኹ","ኽi":"ኺ","ኽa":"ኻ","ኸe":"ኼ","ኽE":"ኼ","ኽo":"ኾ","ኽW":"ዃ","ዃe":"ዀ","ዃu":"ዅ","ዃi":"ዂ","ዃa":"ዃ","ዀu":"ዄ","ዃE":"ዄ","ዃ\'":"ዅ","w":"ው","W":"ው","ውe":"ወ","ውu":"ዉ","ውi":"ዊ","ውa":"ዋ","ወE":"ዌ","ውE":"ዌ","ውo":"ዎ","z":"ዝ","ዝe":"ዘ","ዝu":"ዙ","ዝi":"ዚ","ዝa":"ዛ","ዘE":"ዜ","ዝE":"ዜ","ዝo":"ዞ","ዝW":"ዟ","ዟa":"ዟ","Z":"ዥ","ዥe":"ዠ","ዥu":"ዡ","ዥi":"ዢ","ዥa":"ዣ","ዠe":"ዤ","ዥE":"ዤ","ዥo":"ዦ","ዥW":"ዧ","ዧa":"ዧ","y":"ይ","Y":"ይ","ይe":"የ","ይu":"ዩ","ይi":"ዪ","ይa":"ያ","የe":"ዬ","ይE":"ዬ","ይo":"ዮ","d":"ድ","ድe":"ደ","ድu":"ዱ","ድi":"ዲ","ድa":"ዳ","ደe":"ዴ","ድE":"ዴ","ድo":"ዶ","ድW":"ዷ","ዷa":"ዷ","D":"ዽ","ዽe":"ዸ","ዽu":"ዹ","ዽi":"ዺ","ዽa":"ዻ","ዸe":"ዼ","ዽE":"ዼ","ዽo":"ዾ","ዽW":"ዿ","ዿa":"ዿ","j":"ጅ","J":"ጅ","ጅe":"ጀ","ጅu":"ጁ","ጅi":"ጂ","ጅa":"ጃ","ጀe":"ጄ","ጅE":"ጄ","ጅo":"ጆ","ጅW":"ጇ","ጇa":"ጇ","g":"ግ","ግe":"ገ","ግu":"ጉ","ግi":"ጊ","ግa":"ጋ","ገe":"ጌ","ግE":"ጌ","ግo":"ጎ","ግW":"ጓ","ጓe":"ጐ","ጎo":"ጐ","ጓu":"ጕ","ጓi":"ጒ","ጓa":"ጓ","ጐe":"ጔ","ጓE":"ጔ","ጓ\'":"ጕ","G":"ጝ","ጝe":"ጘ","ጝu":"ጙ","ጝi":"ጚ","ጝa":"ጛ","ጘe":"ጜ","ጝE":"ጜ","ጝo":"ጞ","T":"ጥ","ጥe":"ጠ","ጥu":"ጡ","ጥi":"ጢ","ጥa":"ጣ","ጠe":"ጤ","ጥE":"ጤ","ጥo":"ጦ","ጥW":"ጧ","ጧa":"ጧ","C":"ጭ","ጭe":"ጨ","ጭu":"ጩ","ጭi":"ጪ","ጭa":"ጫ","ጨe":"ጬ","ጭE":"ጬ","ጭo":"ጮ","ጭW":"ጯ","ጯa":"ጯ","P":"ጵ","ጵe":"ጰ","ጵu":"ጱ","ጵi":"ጲ","ጵa":"ጳ","ጰe":"ጴ","ጵE":"ጴ","ጵo":"ጶ","ጵW":"ጷ","ጷa":"ጷ","S":"ጽ","ጽe":"ጸ","ጽu":"ጹ","ጽi":"ጺ","ጽa":"ጻ","ጸe":"ጼ","ጽE":"ጼ","ጽo":"ጾ","ጽW":"ጿ","ጿa":"ጿ","ጽS":"ፅ","ጽ2":"ፅ","ፅe":"ፀ","ፅu":"ፁ","ፅi":"ፂ","ፅa":"ፃ","ፀe":"ፄ","ፅE":"ፄ","ፅo":"ፆ","f":"ፍ","F":"ፍ","ፍe":"ፈ","ፍu":"ፉ","ፍi":"ፊ","ፍa":"ፋ","ፈe":"ፌ","ፍE":"ፌ","ፍo":"ፎ","ፍW":"ፏ","ፏa":"ፏ","ፍY":"ፚ","ፚa":"ፚ","p":"ፕ","ፕe":"ፐ","ፕu":"ፑ","ፕi":"ፒ","ፕa":"ፓ","ፐe":"ፔ","ፕE":"ፔ","ፕW":"ፗ","ፗW":"ፗ","ፗa":"ፗ","ፕo":"ፖ","\'":"\'","\'1" :"፩","\'2":"፪","\'3" :"፫","\'4" :"፬","\'5":"፭","\'6":"፮","\'7":"፯","\'8":"፰","\'9" :"፱","፩0":"፲"}';
    var hashed = eval("(" + keyboard + ")");
    

    function stoping (e) {
        if (false) {
            e.returnValue = false;
            e.cancelBubble = true;
        } else {
            e.preventDefault();
        }
    };
    
    function updating (t, p) {
        if ( t.createTextRange ){
            var r = t.createTextRange();
            r.move('1', p);
            r.select();
        } else {
            t.focus();
            if ( t.selectionStart != undefined ) {
                t.setSelectionRange(p, p)
            }
        }
    }

    String.prototype.strinsertion = function (i, c) {
        return this.substr(0, i) + c + this.substr(i + c.length);
    };

    $.fn.geezit = function (onoff) {   
        onoff = onoff || "on";
        return this.each(function (){
            if ( onoff == 'on') {
                $(this).keypress(function (event) {
                    // keys are not control keys
                    if (!event.altkey && !event.ctrlKey){
                        var codev = event.charCode == undefined ? event.which : event.charCode,
                            stngv = String.fromCharCode(codev),
                            trgt  = event.target,
                            trgtv = trgt.value,
                            flag  = false;

                        if ( trgtv.length > 0 ){
                            if ( event.target.selectionStart < event.target.value.length ) {
                                var r = hashed[trgtv[event.target.selectionStart - 1] + stngv];
                                if ( r != undefined ){
                                    var tmp = event.target.selectionStart;
                                    event.target.value = trgtv.strinsertion(event.target.selectionStart - 1, r);
                                    updating(event.target, tmp);
                                    stoping(event);
                                } else {
                                    flag = true;
                                }
                            } else {
                                var r = hashed[trgtv[event.target.selectionStart - 1] + stngv];
                                if (r != undefined){
                                  var t = event.target.selectionStart;
                                  var l = event.target.value.length;
                                  event.target.value = trgtv.strinsertion(trgtv.length - 1, r);
                                  stoping(event);
                                } else {
                                  flag = true;
                                } 
                            }

                        }

                        if ( trgtv.length == 0 || flag ){
                            var r = hashed[stngv];
                            if (r != undefined) {
                                var t = event.target.selectionStart;
                                var l = event.target.value.length,
                                tmp = event;
                                if (t < l) {
                                    event.target.value = trgtv.substr(0, t) + r + trgtv.substr(t, trgtv.length - 1);
                                    updating(event.target, (trgtv.substr(0, t) + r).length);
                                } else {
                                    event.target.value = trgtv + r;
                                }
                                stoping(event);
                            } 
                        }
                    }
                });
            } else if ( onoff == 'off' ) {
                $(this).unbind('keypress');
            }
        });
    }
})(jQuery);