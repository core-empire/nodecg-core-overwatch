'use strict';

const Discord = require('discord.js');

module.exports = function (nodecg) {
	const client = new Discord.Client();
	const casters = nodecg.Replicant('casters:selected');

	function setCasterSpeakingStatus(discordId, speaking) {
		// Loop over our caster data to match the user in Discord
		for (var caster in casters.value) {
			if(casters.value.hasOwnProperty(caster)) {
				// Associate the Discord user with our stored caster
				if(casters.value[caster].discord_id == discordId) {
					// Set the speaking status of the caster
					casters.value[caster].speaking = speaking;

					return;
				}
			}
		}
	}

	nodecg.listenFor('castersReady', function() {
		// Authenticate with our bot
		client.login(nodecg.bundleConfig.discordBot.token);

		// Connect to the `Caster` voice channel with CORE Central
		client.on('ready', () => {
			let channel = client.channels.get(nodecg.bundleConfig.discordBot.casterChannel);

			console.log('Discord client is ready.');

			channel.join()
				.then(connection => {
					console.log('Connected to voice channel');
				})
				.catch(console.error);

			// Listen for Casters speaking
			client.on('guildMemberSpeaking', (member, speaking) => {
				setCasterSpeakingStatus(member.user.id, speaking);
			});
		});
	});
};