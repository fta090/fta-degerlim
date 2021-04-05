const Discord = require('discord.js')

let sozler = [ 'İnsan sevgiye hükmeder; ama aşk insana hükmeder. - **İskender Pala**' , 'Bir kadın söyleyeceği çok şey olduğu halde susuyorsa, erkek artık tüm şansını kaybetmiştir. - **Pablo Neruda**' , 'Gitsem kalmalar saldırıyor, kalsam gitmeler çağırıyor! - **Kahraman Tazeoğlu**' , 'Mutluluğum belki de şundan ileri geliyor: Bende olanlara seviniyor, olmayanların üzerine de düşmüyorum. - **Lev Nikolayeviç Tolstoy** Bitti diye üzülme, yaşandı diye sevin. Bir gün son kez çevrimdışı olacağız ama kimse bunun farkında olmayacakkadinin sadakati yoklukta, erkegin sadakati varlikta belli olurmuş.   but i still fuckin but i still fuckin love you babe Gitme, kaybedince daha çok seveceksin..   Gördün mü bak, insan deli gibi koşmak istediği yere adım bile atamıyormuş. Beni sevmeyene tahta girsin Rüyam olsan tabire bırakırdım,ama Duamsın o yüzden taktire bırakıyorum Yürümeden önce koşmak gerekliymiş. ']; //İstediğiniz Kadar Arttırabilirsiniz-

exports.run = function (client, message, args) {
  message.channel.send(
    new Discord.MessageEmbed()
    .setColor("GREY")
    .setTitle("Güzel Bir Söz!")
    .setDescription(sozler[Math.floor(Math.random() * sozler.length)])
    )
  }

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['güzelsöz'],
  permLevel: 0
};
exports.help = {
  name: 'güzelsözler',
  description: 'Guzel Söz Paylaşır!',
  usage: 'güzelsözler'
}
