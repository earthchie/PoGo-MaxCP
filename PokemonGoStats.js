/**
 * @name PokemonGoStats.js
 * @version 1.0.0
 * @update August 7, 2016
 * @author Earthchie http://www.earthchie.com/
 * @license WTFPL v.2 - http://www.wtfpl.net/
 **/

function PokemonGoStats(DexId){
    this.DexId = ('00'+(+DexId).toString()).slice(-3);
};

/*********************\
 * Static Properties *
\*********************/
PokemonGoStats.CPMs = [  
    0.094,          0.135137432,    0.16639787,     0.192650919,    0.21573247, 
    0.236572661,    0.25572005,     0.273530381,    0.29024988,     0.306057377, 
    0.3210876,      0.335445036,    0.34921268,     0.362457751,    0.37523559, 
    0.387592406,    0.39956728,     0.411193551,    0.42250001,     0.432926419, 
    0.44310755,     0.4530599578,   0.46279839,     0.472336083,    0.48168495, 
    0.4908558,      0.49985844,     0.508701765,    0.51739395,     0.525942511, 
    0.53435433,     0.542635767,    0.55079269,     0.558830576,    0.56675452, 
    0.574569153,    0.58227891,     0.589887917,    0.59740001,     0.604818814, 
    0.61215729,     0.619399365,    0.62656713,     0.633644533,    0.64065295, 
    0.647576426,    0.65443563,     0.661214806,    0.667934,       0.674577537, 
    0.68116492,     0.687680648,    0.69414365,     0.700538673,    0.70688421, 
    0.713164996,    0.71939909,     0.725571552,    0.7317,         0.734741009, 
    0.73776948,     0.740785574,    0.74378943,     0.746781211,    0.74976104, 
    0.752729087,    0.75568551,     0.758630378,    0.76156384,     0.764486065, 
    0.76739717,     0.770297266,    0.7731865,      0.776064962,    0.77893275, 
    0.781790055,    0.78463697,     0.787473578,    0.79030001
];
/***************************\
 * End - Static Properties *
\***************************/

/******************\
 * Static Methods *
\******************/

PokemonGoStats.getCPM = function(PokemonLevel){
    return this.CPMs[PokemonLevel*2-2] || 0;
}

PokemonGoStats.findPokemonLevelFromCPM = function(CPM){
  var index = 0;
  for(var i in this.CPMs){
    if(this.CPMs[i]>=CPM){
        index = i-1;
      break;
    }
  }
  return (+index+2)/2+0.5;
}

/************************\
 * End - Static Methods *
\************************/

/******************\
 * Public Methods *
\******************/

PokemonGoStats.prototype.getBaseStats = function(){
    var db = {"100":{"dex_id":"100","base_stamina":80,"base_attack":102,"base_defense":124,"max_cp":839,"catch_rate_percentage":40,"flee_rate_percentage":10},"101":{"dex_id":"101","base_stamina":120,"base_attack":150,"base_defense":174,"max_cp":1646,"catch_rate_percentage":16,"flee_rate_percentage":6},"102":{"dex_id":"102","base_stamina":120,"base_attack":110,"base_defense":132,"max_cp":1099,"catch_rate_percentage":40,"flee_rate_percentage":10},"103":{"dex_id":"103","base_stamina":190,"base_attack":232,"base_defense":164,"max_cp":2955,"catch_rate_percentage":16,"flee_rate_percentage":6},"104":{"dex_id":"104","base_stamina":100,"base_attack":102,"base_defense":150,"max_cp":1006,"catch_rate_percentage":32,"flee_rate_percentage":10},"105":{"dex_id":"105","base_stamina":120,"base_attack":140,"base_defense":202,"max_cp":1656,"catch_rate_percentage":12,"flee_rate_percentage":6},"106":{"dex_id":"106","base_stamina":100,"base_attack":148,"base_defense":172,"max_cp":1492,"catch_rate_percentage":16,"flee_rate_percentage":9},"107":{"dex_id":"107","base_stamina":100,"base_attack":138,"base_defense":204,"max_cp":1516,"catch_rate_percentage":16,"flee_rate_percentage":9},"108":{"dex_id":"108","base_stamina":180,"base_attack":126,"base_defense":160,"max_cp":1626,"catch_rate_percentage":16,"flee_rate_percentage":9},"109":{"dex_id":"109","base_stamina":80,"base_attack":136,"base_defense":142,"max_cp":1151,"catch_rate_percentage":40,"flee_rate_percentage":10},"110":{"dex_id":"110","base_stamina":130,"base_attack":190,"base_defense":198,"max_cp":2250,"catch_rate_percentage":16,"flee_rate_percentage":6},"111":{"dex_id":"111","base_stamina":160,"base_attack":110,"base_defense":116,"max_cp":1182,"catch_rate_percentage":40,"flee_rate_percentage":10},"112":{"dex_id":"112","base_stamina":210,"base_attack":116,"base_defense":160,"max_cp":2243,"catch_rate_percentage":16,"flee_rate_percentage":6},"113":{"dex_id":"113","base_stamina":500,"base_attack":40,"base_defense":60,"max_cp":675,"catch_rate_percentage":16,"flee_rate_percentage":9},"114":{"dex_id":"114","base_stamina":130,"base_attack":164,"base_defense":152,"max_cp":1739,"catch_rate_percentage":32,"flee_rate_percentage":9},"115":{"dex_id":"115","base_stamina":210,"base_attack":142,"base_defense":178,"max_cp":2043,"catch_rate_percentage":16,"flee_rate_percentage":9},"116":{"dex_id":"116","base_stamina":60,"base_attack":122,"base_defense":100,"max_cp":794,"catch_rate_percentage":40,"flee_rate_percentage":10},"117":{"dex_id":"117","base_stamina":110,"base_attack":176,"base_defense":150,"max_cp":1713,"catch_rate_percentage":16,"flee_rate_percentage":6},"118":{"dex_id":"118","base_stamina":90,"base_attack":112,"base_defense":126,"max_cp":965,"catch_rate_percentage":40,"flee_rate_percentage":15},"119":{"dex_id":"119","base_stamina":160,"base_attack":172,"base_defense":160,"max_cp":2043,"catch_rate_percentage":16,"flee_rate_percentage":7},"120":{"dex_id":"120","base_stamina":60,"base_attack":130,"base_defense":128,"max_cp":937,"catch_rate_percentage":40,"flee_rate_percentage":15},"121":{"dex_id":"121","base_stamina":120,"base_attack":194,"base_defense":192,"max_cp":2182,"catch_rate_percentage":16,"flee_rate_percentage":6},"122":{"dex_id":"122","base_stamina":80,"base_attack":154,"base_defense":196,"max_cp":1494,"catch_rate_percentage":24,"flee_rate_percentage":9},"123":{"dex_id":"123","base_stamina":140,"base_attack":176,"base_defense":180,"max_cp":2073,"catch_rate_percentage":24,"flee_rate_percentage":9},"124":{"dex_id":"124","base_stamina":130,"base_attack":172,"base_defense":134,"max_cp":1716,"catch_rate_percentage":24,"flee_rate_percentage":9},"125":{"dex_id":"125","base_stamina":130,"base_attack":198,"base_defense":160,"max_cp":2119,"catch_rate_percentage":24,"flee_rate_percentage":9},"126":{"dex_id":"126","base_stamina":130,"base_attack":214,"base_defense":158,"max_cp":2265,"catch_rate_percentage":24,"flee_rate_percentage":9},"127":{"dex_id":"127","base_stamina":130,"base_attack":184,"base_defense":186,"max_cp":2121,"catch_rate_percentage":24,"flee_rate_percentage":9},"128":{"dex_id":"128","base_stamina":150,"base_attack":148,"base_defense":184,"max_cp":1844,"catch_rate_percentage":24,"flee_rate_percentage":9},"129":{"dex_id":"129","base_stamina":40,"base_attack":42,"base_defense":84,"max_cp":262,"catch_rate_percentage":56,"flee_rate_percentage":15},"130":{"dex_id":"130","base_stamina":190,"base_attack":192,"base_defense":196,"max_cp":2688,"catch_rate_percentage":8,"flee_rate_percentage":7},"131":{"dex_id":"131","base_stamina":260,"base_attack":186,"base_defense":190,"max_cp":2980,"catch_rate_percentage":16,"flee_rate_percentage":9},"132":{"dex_id":"132","base_stamina":96,"base_attack":110,"base_defense":110,"max_cp":919,"catch_rate_percentage":16,"flee_rate_percentage":10},"133":{"dex_id":"133","base_stamina":110,"base_attack":114,"base_defense":128,"max_cp":1077,"catch_rate_percentage":32,"flee_rate_percentage":10},"134":{"dex_id":"134","base_stamina":260,"base_attack":186,"base_defense":168,"max_cp":2816,"catch_rate_percentage":12,"flee_rate_percentage":6},"135":{"dex_id":"135","base_stamina":130,"base_attack":192,"base_defense":174,"max_cp":2140,"catch_rate_percentage":12,"flee_rate_percentage":6},"136":{"dex_id":"136","base_stamina":130,"base_attack":238,"base_defense":178,"max_cp":2643,"catch_rate_percentage":12,"flee_rate_percentage":6},"137":{"dex_id":"137","base_stamina":130,"base_attack":156,"base_defense":158,"max_cp":1691,"catch_rate_percentage":32,"flee_rate_percentage":9},"138":{"dex_id":"138","base_stamina":70,"base_attack":132,"base_defense":160,"max_cp":1119,"catch_rate_percentage":32,"flee_rate_percentage":9},"139":{"dex_id":"139","base_stamina":140,"base_attack":180,"base_defense":202,"max_cp":2233,"catch_rate_percentage":12,"flee_rate_percentage":5},"140":{"dex_id":"140","base_stamina":60,"base_attack":148,"base_defense":142,"max_cp":1104,"catch_rate_percentage":32,"flee_rate_percentage":9},"141":{"dex_id":"141","base_stamina":120,"base_attack":190,"base_defense":190,"max_cp":2130,"catch_rate_percentage":12,"flee_rate_percentage":5},"142":{"dex_id":"142","base_stamina":160,"base_attack":182,"base_defense":162,"max_cp":2165,"catch_rate_percentage":16,"flee_rate_percentage":9},"143":{"dex_id":"143","base_stamina":320,"base_attack":180,"base_defense":180,"max_cp":3112,"catch_rate_percentage":16,"flee_rate_percentage":9},"144":{"dex_id":"144","base_stamina":180,"base_attack":198,"base_defense":242,"max_cp":2978,"catch_rate_percentage":0,"flee_rate_percentage":10},"145":{"dex_id":"145","base_stamina":180,"base_attack":232,"base_defense":194,"max_cp":3114,"catch_rate_percentage":0,"flee_rate_percentage":10},"146":{"dex_id":"146","base_stamina":180,"base_attack":242,"base_defense":194,"max_cp":3240,"catch_rate_percentage":0,"flee_rate_percentage":10},"147":{"dex_id":"147","base_stamina":82,"base_attack":128,"base_defense":110,"max_cp":983,"catch_rate_percentage":32,"flee_rate_percentage":9},"148":{"dex_id":"148","base_stamina":122,"base_attack":170,"base_defense":152,"max_cp":1747,"catch_rate_percentage":8,"flee_rate_percentage":6},"149":{"dex_id":"149","base_stamina":182,"base_attack":250,"base_defense":212,"max_cp":3500,"catch_rate_percentage":4,"flee_rate_percentage":5},"150":{"dex_id":"150","base_stamina":212,"base_attack":284,"base_defense":202,"max_cp":4144,"catch_rate_percentage":0,"flee_rate_percentage":10},"151":{"dex_id":"151","base_stamina":200,"base_attack":220,"base_defense":220,"max_cp":3299,"catch_rate_percentage":0,"flee_rate_percentage":10},"001":{"dex_id":"001","base_stamina":90,"base_attack":126,"base_defense":126,"max_cp":1071,"catch_rate_percentage":16,"flee_rate_percentage":10},"002":{"dex_id":"002","base_stamina":120,"base_attack":156,"base_defense":158,"max_cp":1632,"catch_rate_percentage":8,"flee_rate_percentage":7},"003":{"dex_id":"003","base_stamina":160,"base_attack":198,"base_defense":200,"max_cp":2580,"catch_rate_percentage":4,"flee_rate_percentage":5},"004":{"dex_id":"004","base_stamina":78,"base_attack":128,"base_defense":108,"max_cp":955,"catch_rate_percentage":16,"flee_rate_percentage":10},"005":{"dex_id":"005","base_stamina":116,"base_attack":160,"base_defense":140,"max_cp":1557,"catch_rate_percentage":8,"flee_rate_percentage":7},"006":{"dex_id":"006","base_stamina":156,"base_attack":212,"base_defense":182,"max_cp":2602,"catch_rate_percentage":4,"flee_rate_percentage":5},"007":{"dex_id":"007","base_stamina":88,"base_attack":112,"base_defense":142,"max_cp":1008,"catch_rate_percentage":16,"flee_rate_percentage":10},"008":{"dex_id":"008","base_stamina":118,"base_attack":144,"base_defense":176,"max_cp":1582,"catch_rate_percentage":8,"flee_rate_percentage":7},"009":{"dex_id":"009","base_stamina":158,"base_attack":186,"base_defense":222,"max_cp":2542,"catch_rate_percentage":4,"flee_rate_percentage":5},"010":{"dex_id":"010","base_stamina":90,"base_attack":62,"base_defense":66,"max_cp":443,"catch_rate_percentage":40,"flee_rate_percentage":20},"011":{"dex_id":"011","base_stamina":100,"base_attack":56,"base_defense":86,"max_cp":477,"catch_rate_percentage":20,"flee_rate_percentage":9},"012":{"dex_id":"012","base_stamina":120,"base_attack":144,"base_defense":144,"max_cp":1454,"catch_rate_percentage":10,"flee_rate_percentage":6},"013":{"dex_id":"013","base_stamina":80,"base_attack":68,"base_defense":64,"max_cp":449,"catch_rate_percentage":40,"flee_rate_percentage":20},"014":{"dex_id":"014","base_stamina":90,"base_attack":62,"base_defense":82,"max_cp":485,"catch_rate_percentage":20,"flee_rate_percentage":9},"015":{"dex_id":"015","base_stamina":130,"base_attack":144,"base_defense":130,"max_cp":1439,"catch_rate_percentage":10,"flee_rate_percentage":6},"016":{"dex_id":"016","base_stamina":80,"base_attack":94,"base_defense":90,"max_cp":679,"catch_rate_percentage":40,"flee_rate_percentage":20},"017":{"dex_id":"017","base_stamina":126,"base_attack":126,"base_defense":122,"max_cp":1223,"catch_rate_percentage":20,"flee_rate_percentage":9},"018":{"dex_id":"018","base_stamina":166,"base_attack":170,"base_defense":166,"max_cp":2091,"catch_rate_percentage":10,"flee_rate_percentage":6},"019":{"dex_id":"019","base_stamina":60,"base_attack":92,"base_defense":86,"max_cp":581,"catch_rate_percentage":40,"flee_rate_percentage":20},"020":{"dex_id":"020","base_stamina":110,"base_attack":146,"base_defense":150,"max_cp":1444,"catch_rate_percentage":16,"flee_rate_percentage":7},"021":{"dex_id":"021","base_stamina":80,"base_attack":102,"base_defense":78,"max_cp":686,"catch_rate_percentage":40,"flee_rate_percentage":15},"022":{"dex_id":"022","base_stamina":130,"base_attack":168,"base_defense":146,"max_cp":1746,"catch_rate_percentage":16,"flee_rate_percentage":7},"023":{"dex_id":"023","base_stamina":70,"base_attack":112,"base_defense":112,"max_cp":824,"catch_rate_percentage":40,"flee_rate_percentage":15},"024":{"dex_id":"024","base_stamina":120,"base_attack":166,"base_defense":166,"max_cp":1767,"catch_rate_percentage":16,"flee_rate_percentage":7},"025":{"dex_id":"025","base_stamina":70,"base_attack":124,"base_defense":108,"max_cp":887,"catch_rate_percentage":16,"flee_rate_percentage":10},"026":{"dex_id":"026","base_stamina":120,"base_attack":200,"base_defense":154,"max_cp":2028,"catch_rate_percentage":8,"flee_rate_percentage":6},"027":{"dex_id":"027","base_stamina":100,"base_attack":90,"base_defense":114,"max_cp":798,"catch_rate_percentage":40,"flee_rate_percentage":10},"028":{"dex_id":"028","base_stamina":150,"base_attack":150,"base_defense":172,"max_cp":1810,"catch_rate_percentage":16,"flee_rate_percentage":6},"029":{"dex_id":"029","base_stamina":110,"base_attack":100,"base_defense":104,"max_cp":876,"catch_rate_percentage":40,"flee_rate_percentage":15},"030":{"dex_id":"030","base_stamina":140,"base_attack":132,"base_defense":136,"max_cp":1404,"catch_rate_percentage":20,"flee_rate_percentage":7},"031":{"dex_id":"031","base_stamina":180,"base_attack":184,"base_defense":190,"max_cp":2485,"catch_rate_percentage":10,"flee_rate_percentage":5},"032":{"dex_id":"032","base_stamina":92,"base_attack":110,"base_defense":94,"max_cp":843,"catch_rate_percentage":40,"flee_rate_percentage":15},"033":{"dex_id":"033","base_stamina":122,"base_attack":142,"base_defense":128,"max_cp":1372,"catch_rate_percentage":20,"flee_rate_percentage":7},"034":{"dex_id":"034","base_stamina":162,"base_attack":204,"base_defense":170,"max_cp":2475,"catch_rate_percentage":10,"flee_rate_percentage":5},"035":{"dex_id":"035","base_stamina":140,"base_attack":116,"base_defense":124,"max_cp":1200,"catch_rate_percentage":24,"flee_rate_percentage":10},"036":{"dex_id":"036","base_stamina":190,"base_attack":178,"base_defense":178,"max_cp":2397,"catch_rate_percentage":8,"flee_rate_percentage":6},"037":{"dex_id":"037","base_stamina":76,"base_attack":106,"base_defense":118,"max_cp":831,"catch_rate_percentage":24,"flee_rate_percentage":10},"038":{"dex_id":"038","base_stamina":146,"base_attack":176,"base_defense":194,"max_cp":2188,"catch_rate_percentage":8,"flee_rate_percentage":6},"039":{"dex_id":"039","base_stamina":230,"base_attack":98,"base_defense":54,"max_cp":917,"catch_rate_percentage":40,"flee_rate_percentage":10},"040":{"dex_id":"040","base_stamina":280,"base_attack":168,"base_defense":108,"max_cp":2177,"catch_rate_percentage":16,"flee_rate_percentage":6},"041":{"dex_id":"041","base_stamina":80,"base_attack":88,"base_defense":90,"max_cp":642,"catch_rate_percentage":40,"flee_rate_percentage":20},"042":{"dex_id":"042","base_stamina":150,"base_attack":164,"base_defense":164,"max_cp":1921,"catch_rate_percentage":16,"flee_rate_percentage":7},"043":{"dex_id":"043","base_stamina":90,"base_attack":134,"base_defense":130,"max_cp":1148,"catch_rate_percentage":48,"flee_rate_percentage":15},"044":{"dex_id":"044","base_stamina":120,"base_attack":162,"base_defense":158,"max_cp":1689,"catch_rate_percentage":24,"flee_rate_percentage":7},"045":{"dex_id":"045","base_stamina":150,"base_attack":202,"base_defense":190,"max_cp":2492,"catch_rate_percentage":12,"flee_rate_percentage":5},"046":{"dex_id":"046","base_stamina":70,"base_attack":122,"base_defense":120,"max_cp":916,"catch_rate_percentage":32,"flee_rate_percentage":15},"047":{"dex_id":"047","base_stamina":120,"base_attack":162,"base_defense":170,"max_cp":1747,"catch_rate_percentage":16,"flee_rate_percentage":7},"048":{"dex_id":"048","base_stamina":120,"base_attack":108,"base_defense":118,"max_cp":1029,"catch_rate_percentage":40,"flee_rate_percentage":15},"049":{"dex_id":"049","base_stamina":140,"base_attack":172,"base_defense":154,"max_cp":1890,"catch_rate_percentage":16,"flee_rate_percentage":7},"050":{"dex_id":"050","base_stamina":20,"base_attack":108,"base_defense":86,"max_cp":456,"catch_rate_percentage":40,"flee_rate_percentage":10},"051":{"dex_id":"051","base_stamina":70,"base_attack":148,"base_defense":140,"max_cp":1168,"catch_rate_percentage":16,"flee_rate_percentage":6},"052":{"dex_id":"052","base_stamina":80,"base_attack":104,"base_defense":94,"max_cp":756,"catch_rate_percentage":40,"flee_rate_percentage":15},"053":{"dex_id":"053","base_stamina":130,"base_attack":156,"base_defense":146,"max_cp":1631,"catch_rate_percentage":16,"flee_rate_percentage":7},"054":{"dex_id":"054","base_stamina":100,"base_attack":132,"base_defense":112,"max_cp":1109,"catch_rate_percentage":40,"flee_rate_percentage":10},"055":{"dex_id":"055","base_stamina":160,"base_attack":194,"base_defense":176,"max_cp":2386,"catch_rate_percentage":16,"flee_rate_percentage":6},"056":{"dex_id":"056","base_stamina":80,"base_attack":112,"base_defense":96,"max_cp":878,"catch_rate_percentage":40,"flee_rate_percentage":10},"057":{"dex_id":"057","base_stamina":130,"base_attack":178,"base_defense":150,"max_cp":1864,"catch_rate_percentage":16,"flee_rate_percentage":6},"058":{"dex_id":"058","base_stamina":110,"base_attack":156,"base_defense":110,"max_cp":1335,"catch_rate_percentage":24,"flee_rate_percentage":10},"059":{"dex_id":"059","base_stamina":180,"base_attack":230,"base_defense":180,"max_cp":2983,"catch_rate_percentage":8,"flee_rate_percentage":6},"060":{"dex_id":"060","base_stamina":80,"base_attack":108,"base_defense":98,"max_cp":795,"catch_rate_percentage":40,"flee_rate_percentage":15},"061":{"dex_id":"061","base_stamina":130,"base_attack":132,"base_defense":132,"max_cp":1340,"catch_rate_percentage":20,"flee_rate_percentage":7},"062":{"dex_id":"062","base_stamina":180,"base_attack":180,"base_defense":202,"max_cp":2505,"catch_rate_percentage":10,"flee_rate_percentage":5},"063":{"dex_id":"063","base_stamina":50,"base_attack":110,"base_defense":76,"max_cp":600,"catch_rate_percentage":40,"flee_rate_percentage":99},"064":{"dex_id":"064","base_stamina":80,"base_attack":150,"base_defense":112,"max_cp":1131,"catch_rate_percentage":20,"flee_rate_percentage":7},"065":{"dex_id":"065","base_stamina":110,"base_attack":186,"base_defense":152,"max_cp":1813,"catch_rate_percentage":10,"flee_rate_percentage":5},"066":{"dex_id":"066","base_stamina":140,"base_attack":118,"base_defense":96,"max_cp":1089,"catch_rate_percentage":40,"flee_rate_percentage":10},"067":{"dex_id":"067","base_stamina":160,"base_attack":154,"base_defense":144,"max_cp":1760,"catch_rate_percentage":20,"flee_rate_percentage":7},"068":{"dex_id":"068","base_stamina":180,"base_attack":198,"base_defense":180,"max_cp":2594,"catch_rate_percentage":10,"flee_rate_percentage":5},"069":{"dex_id":"069","base_stamina":100,"base_attack":158,"base_defense":78,"max_cp":1117,"catch_rate_percentage":40,"flee_rate_percentage":15},"070":{"dex_id":"070","base_stamina":130,"base_attack":190,"base_defense":110,"max_cp":1723,"catch_rate_percentage":20,"flee_rate_percentage":7},"071":{"dex_id":"071","base_stamina":160,"base_attack":222,"base_defense":152,"max_cp":2530,"catch_rate_percentage":10,"flee_rate_percentage":5},"072":{"dex_id":"072","base_stamina":80,"base_attack":106,"base_defense":136,"max_cp":905,"catch_rate_percentage":40,"flee_rate_percentage":15},"073":{"dex_id":"073","base_stamina":160,"base_attack":170,"base_defense":196,"max_cp":2220,"catch_rate_percentage":16,"flee_rate_percentage":7},"074":{"dex_id":"074","base_stamina":80,"base_attack":106,"base_defense":118,"max_cp":849,"catch_rate_percentage":40,"flee_rate_percentage":10},"075":{"dex_id":"075","base_stamina":110,"base_attack":142,"base_defense":156,"max_cp":1433,"catch_rate_percentage":20,"flee_rate_percentage":7},"076":{"dex_id":"076","base_stamina":160,"base_attack":176,"base_defense":198,"max_cp":2303,"catch_rate_percentage":10,"flee_rate_percentage":5},"077":{"dex_id":"077","base_stamina":100,"base_attack":168,"base_defense":138,"max_cp":1516,"catch_rate_percentage":32,"flee_rate_percentage":10},"078":{"dex_id":"078","base_stamina":130,"base_attack":200,"base_defense":170,"max_cp":2199,"catch_rate_percentage":12,"flee_rate_percentage":6},"079":{"dex_id":"079","base_stamina":180,"base_attack":110,"base_defense":110,"max_cp":1218,"catch_rate_percentage":40,"flee_rate_percentage":10},"080":{"dex_id":"080","base_stamina":190,"base_attack":184,"base_defense":198,"max_cp":2597,"catch_rate_percentage":16,"flee_rate_percentage":6},"081":{"dex_id":"081","base_stamina":50,"base_attack":128,"base_defense":138,"max_cp":890,"catch_rate_percentage":40,"flee_rate_percentage":10},"082":{"dex_id":"082","base_stamina":100,"base_attack":186,"base_defense":180,"max_cp":1879,"catch_rate_percentage":16,"flee_rate_percentage":6},"083":{"dex_id":"083","base_stamina":104,"base_attack":138,"base_defense":132,"max_cp":1263,"catch_rate_percentage":24,"flee_rate_percentage":9},"084":{"dex_id":"084","base_stamina":70,"base_attack":126,"base_defense":96,"max_cp":855,"catch_rate_percentage":40,"flee_rate_percentage":10},"085":{"dex_id":"085","base_stamina":120,"base_attack":182,"base_defense":150,"max_cp":1836,"catch_rate_percentage":16,"flee_rate_percentage":6},"086":{"dex_id":"086","base_stamina":130,"base_attack":104,"base_defense":138,"max_cp":1107,"catch_rate_percentage":40,"flee_rate_percentage":9},"087":{"dex_id":"087","base_stamina":180,"base_attack":156,"base_defense":192,"max_cp":2145,"catch_rate_percentage":16,"flee_rate_percentage":6},"088":{"dex_id":"088","base_stamina":160,"base_attack":124,"base_defense":110,"max_cp":1284,"catch_rate_percentage":40,"flee_rate_percentage":10},"089":{"dex_id":"089","base_stamina":210,"base_attack":180,"base_defense":188,"max_cp":2602,"catch_rate_percentage":16,"flee_rate_percentage":6},"090":{"dex_id":"090","base_stamina":60,"base_attack":120,"base_defense":112,"max_cp":822,"catch_rate_percentage":40,"flee_rate_percentage":10},"091":{"dex_id":"091","base_stamina":100,"base_attack":196,"base_defense":196,"max_cp":2052,"catch_rate_percentage":16,"flee_rate_percentage":6},"092":{"dex_id":"092","base_stamina":60,"base_attack":136,"base_defense":82,"max_cp":804,"catch_rate_percentage":32,"flee_rate_percentage":10},"093":{"dex_id":"093","base_stamina":90,"base_attack":172,"base_defense":118,"max_cp":1380,"catch_rate_percentage":16,"flee_rate_percentage":7},"094":{"dex_id":"094","base_stamina":120,"base_attack":204,"base_defense":156,"max_cp":2078,"catch_rate_percentage":8,"flee_rate_percentage":5},"095":{"dex_id":"095","base_stamina":70,"base_attack":90,"base_defense":186,"max_cp":857,"catch_rate_percentage":16,"flee_rate_percentage":9},"096":{"dex_id":"096","base_stamina":120,"base_attack":104,"base_defense":140,"max_cp":1075,"catch_rate_percentage":40,"flee_rate_percentage":10},"097":{"dex_id":"097","base_stamina":170,"base_attack":162,"base_defense":196,"max_cp":2184,"catch_rate_percentage":16,"flee_rate_percentage":6},"098":{"dex_id":"098","base_stamina":60,"base_attack":116,"base_defense":110,"max_cp":792,"catch_rate_percentage":40,"flee_rate_percentage":15},"099":{"dex_id":"099","base_stamina":110,"base_attack":178,"base_defense":168,"max_cp":1823,"catch_rate_percentage":16,"flee_rate_percentage":7}};
    return db[this.DexId];
}

PokemonGoStats.prototype.calcCP = function(IVSta, IVAtk, IVDef, PokemonLevel){
    var baseStats = this.getBaseStats(),
    BaseSta = baseStats.base_stamina,
    BaseAtk = baseStats.base_attack,
    BaseDef = baseStats.base_defense;
    var CP = (BaseAtk + IVAtk) * Math.sqrt(BaseDef + IVDef) * Math.sqrt(BaseSta + IVSta) * Math.pow(PokemonGoStats.getCPM(PokemonLevel), 2) / 10;

    if (CP < 10) {
        CP = 10;
    }
    return Math.floor(CP);
}

PokemonGoStats.prototype.calcMaxCP = function(IVSta, IVAtk, IVDef, PlayerLevel){
    var PokemonMaxLevel = PlayerLevel + 1.5;
    if (PokemonMaxLevel > 40) {
        PokemonMaxLevel = 40;
    }
    return this.calcCP(IVSta, IVAtk, IVDef, PokemonMaxLevel);
}

PokemonGoStats.prototype.calcCPM= function(IVSta, IVAtk, IVDef, CP){
    var baseStats = this.getBaseStats(),
    BaseSta = baseStats.base_stamina,
    BaseAtk = baseStats.base_attack,
    BaseDef = baseStats.base_defense;
    return Math.sqrt(10 * CP / (BaseAtk + IVAtk) / Math.sqrt(BaseDef + IVDef) / Math.sqrt(BaseSta + IVSta));
}

PokemonGoStats.prototype.calcLevel = function(IVSta, IVAtk, IVDef, CP){
    return PokemonGoStats.findPokemonLevelFromCPM(this.calcCPM(IVSta, IVAtk, IVDef, CP));
}

PokemonGoStats.prototype.calcStats = function(IVSta, IVAtk, IVDef, CP){
    var CPM = this.calcCPM(IVSta, IVAtk, IVDef, CP),
    baseStats = this.getBaseStats();
    
    return {
        HP: Math.floor((baseStats.base_stamina+IVSta)*CPM),
        Atk: Math.floor((baseStats.base_attack+IVAtk)*CPM),
        Def: Math.floor((baseStats.base_defense+IVDef)*CPM)
    }
}

/************************\
 * End - Public Methods *
\************************/
