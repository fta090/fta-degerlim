const Discord = require("discord.js");

exports.run = function(client, message) {
  const embed = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setTitle("» FTA BOT Komut Sistemleri")
    .setTimestamp()
    .addField("» .ban", " İstediğiniz Kullanıcıyı Banlamanızı Sağlar.")
    .addField("» .lock ", "Kanalı Kilitler.")
    .addField("» .unlock", " Kiliti Açar.")
    .addField("» .sor/.sor2 ", "Bot a Soru Sormanızı Sağlar..")
    .addField("» .sil ", "Belirtilen Kadar Mesajı Siler . .")
    .addField("» .güzelsözler ", "Güzel Söz Söyler Bot.")
    .addField("» .banlist ", "Banlananları Gösterir..")
    .addField("» .mute ", "Belirdeginiz Kişiyi Susturur.")
    .addField("» .sil ", "Belirtilen Sayı Kadar Mesaj Siler.")
    .addField("» .cihaz ", " Kişinin Cihaz Bilgisi Verilir.")
    .addField("» .istatistik  ", "Botun istatistiklerini Göstertir.")
    .addField("» .avatar ", "Kulanıcının Avatarnı Atar.")
    .addField("» .unban ", "Kulanıcının Banını Açar.")
    .addField("» .say ", "Sunucudaki Kişi Sayısını Ve Bot Sayısını Gösterir.")
    .addField("» .zar-at ", "Zar Atar.")
    .addField("» .yaz ", "Belirtginiz Mesajı Yazar.")
    .addField("» .kullanıcı-bilgi  ", "Kullanıcı hakkında bilgi verir.") 
    .addField("» .rolbilgi ", "Belirtginiz Rol Hakında Bilgi Verir.")
    .addField("» .duello  ", "İstediğiniz bir kişi ile düello atarsınız!")
    .addField("» .öp  ", "İstediğiniz kişiyi öpersiniz.")
    .addField("» .tkm  ", "Taş kağıt makas oyununu oynar.")
    .addField("» .howgay  ", "Eglence Komutu :D.")
    .addField("» .boğazla  ", "PP sine bogazlma görünmü verir.")
    .setFooter("© 2020 FTA Bot", client.user.avatarURL)

    .setTimestamp()
    .setThumbnail(client.user.avatarURL);
  message.channel.send(embed);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: "yardım",
  description: "Tüm komutları gösterir.",
  usage: "yardım"
};
