export default {
	site: {
		title: 'xPortal',
		logo: '',
		description: "xPortal is a personalized game discovery platform where you will find a curated list of the top 3D Browser-based Multiplayer Games. 100% Free to Play in any web browser that supports HTML5/WebGL. If you enjoy 3D games, and multiplayer game experiences you've come to the right place!"
	},
	user: {
		displayName: '',
		email: '',
		photoURL: '',
		uid: null
	},
	chat: {
		input: '',
		messages: []
	},
	menu: {
		show: false,
		links: [
		{
			name: 'Home',
			icon: 'fa fa-home',
			action: {
				type: 'route',
				value: '/'
			}
		},
		{
			name: 'Search',
			icon: 'fa fa-search',
			action: {
				type: 'route',
				value: '/search'
			}
		},			
		{
			name: 'Trending',
			icon: 'fa fa-fire',
			action: {
				type: 'route',
				value: '/trending'
			}
		},
		{
			name: 'Favorites',
			icon: 'fa fa-star-half-alt',
			action: {
				type: 'route',
				value: '/favorites'
			}
		},
		{
			name: 'Chat',
			icon: 'fa fa-comments',
			action: {
				type: 'route',
				value: '/chat'
			}
		},														
		{
			name: 'Sign In',
			icon: 'fa fa-sign-in-alt',
			action: {
				type: 'login',
				value: 'login'
			}
		},
		{
			name: 'Sign Off',
			icon: 'fa fa-sign-out-alt',
			action: {
				type: 'logout',
				value: 'logout'
			}
		},														
	]
	},
	games: {  
		recommended: [
			{
				name: 'Squadd Royale',
				id: 'squaddroyale',
				url: 'https://squaddroyale.io',
				thumbnail: '/img/games/squaddroyale.jpg',
				description: 'Squadd Royale is a battle royale game, where you must kill your opponents and be the last one standing! Explore a large map running or driving vehicles, visit buildings to find weapons, ammo and power-ups. Gain XP and levels by finishing in the top 10 positions, and unlock skins, parachutes, emotes and flags.',
				category: 'battle royale, shooter, pvp, top down'
			},
			{
				name: 'Krunker',
				id: 'krunker',
				url: 'https://krunker.io',
				thumbnail: '/img/games/krunker.jpg',
				description: 'Browser Based Competitive First Person Shooter. Select a class that fits your playstyle and jump into the arena',
				category: 'shooter, fps, first person, pvp'
			},
			{
				name: 'WarScrap',
				id: 'warscrap',
				url: 'https://warscrap.io',						
				thumbnail: '/img/games/warscrap.jpg',
				description: 'Mine resources, gear up, and prepare for epic base defense battles in this free to play, co-op multiplayer third-person shooter, 3D .io Game!',
				category: 'shooter, third person, coop, pve, robots'
			},
			{
				name: 'Hordes',
				id: 'hordes',
				url: 'https://hordes.io',					
				thumbnail: '/img/games/hordes.jpg',
				description: 'Hordes is one of the more unique games we feature, initially a massive different is its 3d aspect and game play, you wander around this 3d environment and aim to defeat monsters either solo or by teaming up with other players around the map.',
				category: 'rpg, pvp, pve'
			},
			{
				name: 'Blast Arena',
				id: 'blastarena',
				url: 'https://blastarena.io',					
				thumbnail: '/img/games/blastarena.jpg',
				description: 'Blastarena.io is an incredibly fun free for all arena game where you play as a small blocky character and place bombs in order to clear terrain and kill the other bombers. This game was originally based on the classic indie game bomberman and it does it great justice as its is similarly addictive! If you never played the original fear not as Blastarena.io is just as fun to play alone or with friends.',
				category: 'top down, pvp, bombs, power ups'
			},
			{
				name: 'Robostorm',
				id: 'robostorm',
				url: 'https://robostorm.io',					
				thumbnail: '/img/games/robostorm.jpg',
				description: "Fast-paced multiplayer robot battle game. Challenge players around the world and enjoy juicy 3D destruction!",
				category: 'pvp, top down, shooter, robots'
			}    
		],
		new: [
			{
				name: 'Squadd Royale',
				id: 'squaddroyale',
				url: 'https://squaddroyale.io',
				thumbnail: '/img/games/squaddroyale.jpg',
				description: 'Squadd Royale is a battle royale game, where you must kill your opponents and be the last one standing! Explore a large map running or driving vehicles, visit buildings to find weapons, ammo and power-ups. Gain XP and levels by finishing in the top 10 positions, and unlock skins, parachutes, emotes and flags.',
				category: 'battle royale, shooter, pvp, top down'
			},
			{
				name: 'DeadWalk',
				id: 'deadwalk',
				url: 'https://deadwalk.io',					
				thumbnail: '/img/games/deadwalk.jpg',
				description: "Hell is full, the dead are here! Deadwalk.io is a 3-D shooter where you must scavenge for weapons and upgrades while you fend off zombies and hunt down other players.  You probably never thought the post-apocalypse would be this fun!",
				category: 'shooter, pvp, third person, zombie, survival'
			},
			{
				name: 'Exocraft',
				id: 'exocraft',
				url: 'https://exocraft.io',					
				thumbnail: '/img/games/exocraft.jpg',
				description: 'Build your unique exocraft and grow your fleet of drones in order to battle and mine your way to the top. Set in a dyaing alien world, Exocraft pits you and your friends against ancient guardians and other defenses protecting its most valuable resources.',
				category: 'shooter, robots, top down, coop, pvp'
			},
			{
				name: 'Relmz',
				id: 'relmz',
				url: 'https://relmz.io',					
				thumbnail: '/img/games/relmz.jpg',
				description: "Inspired by World Of Warcraft. Relmz is a mini mmo rpg io game all about fighting monsters and finding loot! Explore a mini world filled with dangerous monsters!",
				category: 'rpg, coop, mmo, loot'
			},
			{
				name: 'ToBattle',
				id: 'tobattle',
				url: 'https://tobattle.io',					
				thumbnail: '/img/games/tobattle.jpg',
				description: "ToBattle.io is a FPS game with death match and free for all modes. There is only station map on game but there will be more.",
				category: 'pvp, first person, shooter, fps'
			},
			{
				name: 'Hole',
				id: 'hole',
				url: 'https://hole.io',					
				thumbnail: '/img/games/hole.jpg',
				description: "You've been given a chance to control a black hole - a small one, but capable of consuming everything on its path. You move freely across a lively metropolis and  you can swallow cars, humans, fences, street lights and even multi-storey buildings, although in the beginning your abilities are modest and you will have to start by eating all sorts of small stuff. And to avoid letting you get bored or feel invincible there are other black holes in the area - they all want to eat and grow, but there can be only one leader - the fastest and the hungriest of them all.",
				category: 'battle, pvp, top down, eat'
			},			
		],
		popular: [
			{
				name: 'Squadd Royale',
				id: 'squaddroyale',
				url: 'https://squaddroyale.io',
				thumbnail: '/img/games/squaddroyale.jpg',
				description: 'Squadd Royale is a battle royale game, where you must kill your opponents and be the last one standing! Explore a large map running or driving vehicles, visit buildings to find weapons, ammo and power-ups. Gain XP and levels by finishing in the top 10 positions, and unlock skins, parachutes, emotes and flags.',
				category: 'battle royale, shooter, pvp, top down'
			},
			{
				name: 'Krunker',
				id: 'krunker',
				url: 'https://krunker.io',
				thumbnail: '/img/games/krunker.jpg',
				description: 'Browser Based Competitive First Person Shooter. Select a class that fits your playstyle and jump into the arena',
				category: 'shooter, fps, first person, pvp'
			},
			{
				name: 'Shell Shocker',
				id: 'shellshocker',
				url: 'https://shellshock.io',				
				thumbnail: '/img/games/shellshocker.jpg',
				description: 'The first browser-based First Person Egger! Get cracking! Choose your class and terminate your enemies with eggstreme prejudice in this 3d multplayer shooter. Equip lethal weapons like the Scramble Shotgun and EggK47 as you cluck your way to victory.',
				category: 'shooter, fps, first person, pvp'
			},
			{
				name: 'WarScrap',
				id: 'warscrap',
				url: 'https://warscrap.io',						
				thumbnail: '/img/games/warscrap.jpg',
				description: 'Mine resources, gear up, and prepare for epic base defense battles in this free to play, co-op multiplayer third-person shooter, 3D .io Game!',
				category: 'shooter, third person, coop, pve, robots'
			},
			{
				name: 'Hordes',
				id: 'hordes',
				url: 'https://hordes.io',					
				thumbnail: '/img/games/hordes.jpg',
				description: 'Hordes is one of the more unique games we feature, initially a massive different is its 3d aspect and game play, you wander around this 3d environment and aim to defeat monsters either solo or by teaming up with other players around the map.',
				category: 'rpg, pvp, pve'
			},
			{
				name: 'Squadd',
				id: 'squadd',
				url: 'https://squadd.io',					
				thumbnail: '/img/games/squadd.jpg',
				description: 'Squadd.io is a super fast paced shooting io game. The map is in a 3d world, and you can use tons of different types of weapons which can be found around the map.',
				category: 'shooter, pvp, top down'
			},
			{
				name: 'Blast Arena',
				id: 'blastarena',
				url: 'https://blastarena.io',					
				thumbnail: '/img/games/blastarena.jpg',
				description: 'Blastarena.io is an incredibly fun free for all arena game where you play as a small blocky character and place bombs in order to clear terrain and kill the other bombers. This game was originally based on the classic indie game bomberman and it does it great justice as its is similarly addictive! If you never played the original fear not as Blastarena.io is just as fun to play alone or with friends.',
				category: 'top down, pvp, bombs, power ups'
			},
			{
				name: 'DeadWalk',
				id: 'deadwalk',
				url: 'https://deadwalk.io',					
				thumbnail: '/img/games/deadwalk.jpg',
				description: "Hell is full, the dead are here! Deadwalk.io is a 3-D shooter where you must scavenge for weapons and upgrades while you fend off zombies and hunt down other players.  You probably never thought the post-apocalypse would be this fun!",
				category: 'shooter, pvp, third person, zombie, survival'
			},
			{
				name: 'Exocraft',
				id: 'exocraft',
				url: 'https://exocraft.io',					
				thumbnail: '/img/games/exocraft.jpg',
				description: 'Build your unique exocraft and grow your fleet of drones in order to battle and mine your way to the top. Set in a dyaing alien world, Exocraft pits you and your friends against ancient guardians and other defenses protecting its most valuable resources.',
				category: 'shooter, robots, top down, coop, pvp'
			},
			{
				name: 'Pie AI',
				id: 'pieai',
				url: 'https://pie.ai',					
				thumbnail: '/img/games/pieai.jpg',
				description: "Jump straight into the action to eat pies and other players. Unlock skill points to increase your power and armor in this fast-pace battle for survival.",
				category: 'battle, pvp, top down, eat'
			},
			{
				name: 'Hole',
				id: 'hole',
				url: 'https://hole.io',					
				thumbnail: '/img/games/hole.jpg',
				description: "You've been given a chance to control a black hole - a small one, but capable of consuming everything on its path. You move freely across a lively metropolis and  you can swallow cars, humans, fences, street lights and even multi-storey buildings, although in the beginning your abilities are modest and you will have to start by eating all sorts of small stuff. And to avoid letting you get bored or feel invincible there are other black holes in the area - they all want to eat and grow, but there can be only one leader - the fastest and the hungriest of them all.",
				category: 'battle, pvp, top down, eat'
			},
			{
				name: 'Relmz',
				id: 'relmz',
				url: 'https://relmz.io',					
				thumbnail: '/img/games/relmz.jpg',
				description: "Inspired by World Of Warcraft. Relmz is a mini mmo rpg io game all about fighting monsters and finding loot! Explore a mini world filled with dangerous monsters!",
				category: 'rpg, coop, mmo, loot'
			},
			{
				name: 'Robostorm',
				id: 'robostorm',
				url: 'https://robostorm.io',					
				thumbnail: '/img/games/robostorm.jpg',
				description: "Fast-paced multiplayer robot battle game. Challenge players around the world and enjoy juicy 3D destruction!",
				category: 'pvp, top down, shooter, robots'
			},
			{
				name: 'Skywars',
				id: 'skywars',
				url: 'https://skywars.io',					
				thumbnail: '/img/games/skywars.jpg',
				description: "Skywars.io is an .io game like no other! Play this game for awesome 3d aerial combat, and battle with other players around the world in epic dogfights in the sky over a mighty ocean.",
				category: 'pvp, sky, battle, planes'
			},
			{
				name: 'Tanks',
				id: 'tanks',
				url: 'https://tanksio.online',					
				thumbnail: '/img/games/tanks.jpg',
				description: "Fight together with your team in the arena against other players from around the world! Your team must be the first to commit 25 kills to win! Cover your teammates and grab power-ups appearing on the map. But do not give your life in vain! Remember that each frag is a step to victory both for you and your opponents!",
				category: 'tanks, robots, pvp, coop, battle, top down'
			},
			{
				name: 'ToBattle',
				id: 'tobattle',
				url: 'https://tobattle.io',					
				thumbnail: '/img/games/tobattle.jpg',
				description: "ToBattle.io is a FPS game with death match and free for all modes. There is only station map on game but there will be more.",
				category: 'pvp, first person, shooter, fps'
			},
			{
				name: 'SnowBall',
				id: 'snowball',
				url: 'https://snowball-io.io',					
				thumbnail: '/img/games/snowball.jpg',
				description: "Snowball.io is online Multiplayer io game. Make your snowball big and bump your opponents to kick them from snow arena.",
				category: 'pvp, snow, battle, top down'
			},	
			{
				name: 'Warbot',
				id: 'warbot',
				url: 'https://Warbot.io',					
				thumbnail: '/img/games/Warbot.jpg',
				description: "An infinite battle of hundred robots! Free For All, Last One Standing ... (60 players needed!), Survival Mission",
				category: 'pvp, battle royale, battle, robots, top down'
			}     				  			 			             
		],
		trending: [
			{
				name: 'Squadd Royale',
				id: 'squaddroyale',
				url: 'https://squaddroyale.io',
				thumbnail: '/img/games/squaddroyale.jpg',
				description: 'Squadd Royale is a battle royale game, where you must kill your opponents and be the last one standing! Explore a large map running or driving vehicles, visit buildings to find weapons, ammo and power-ups. Gain XP and levels by finishing in the top 10 positions, and unlock skins, parachutes, emotes and flags.',
				category: 'battle royale, shooter, pvp, top down'
			},
			{
				name: 'Krunker',
				id: 'krunker',
				url: 'https://krunker.io',
				thumbnail: '/img/games/krunker.jpg',
				description: 'Browser Based Competitive First Person Shooter. Select a class that fits your playstyle and jump into the arena',
				category: 'shooter, fps, first person, pvp'
			},
			{
				name: 'Shell Shocker',
				id: 'shellshocker',
				url: 'https://shellshock.io',				
				thumbnail: '/img/games/shellshocker.jpg',
				description: 'The first browser-based First Person Egger! Get cracking! Choose your class and terminate your enemies with eggstreme prejudice in this 3d multplayer shooter. Equip lethal weapons like the Scramble Shotgun and EggK47 as you cluck your way to victory.',
				category: 'shooter, fps, first person, pvp'
			},
			{
				name: 'WarScrap',
				id: 'warscrap',
				url: 'https://warscrap.io',						
				thumbnail: '/img/games/warscrap.jpg',
				description: 'Mine resources, gear up, and prepare for epic base defense battles in this free to play, co-op multiplayer third-person shooter, 3D .io Game!',
				category: 'shooter, third person, coop, pve, robots'
			},
			{
				name: 'Hordes',
				id: 'hordes',
				url: 'https://hordes.io',					
				thumbnail: '/img/games/hordes.jpg',
				description: 'Hordes is one of the more unique games we feature, initially a massive different is its 3d aspect and game play, you wander around this 3d environment and aim to defeat monsters either solo or by teaming up with other players around the map.',
				category: 'rpg, pvp, pve'
			},
			{
				name: 'Blast Arena',
				id: 'blastarena',
				url: 'https://blastarena.io',					
				thumbnail: '/img/games/blastarena.jpg',
				description: 'Blastarena.io is an incredibly fun free for all arena game where you play as a small blocky character and place bombs in order to clear terrain and kill the other bombers. This game was originally based on the classic indie game bomberman and it does it great justice as its is similarly addictive! If you never played the original fear not as Blastarena.io is just as fun to play alone or with friends.',
				category: 'top down, pvp, bombs, power ups'
			},
			{
				name: 'DeadWalk',
				id: 'deadwalk',
				url: 'https://deadwalk.io',					
				thumbnail: '/img/games/deadwalk.jpg',
				description: "Hell is full, the dead are here! Deadwalk.io is a 3-D shooter where you must scavenge for weapons and upgrades while you fend off zombies and hunt down other players.  You probably never thought the post-apocalypse would be this fun!",
				category: 'shooter, pvp, third person, zombie, survival'
			},
			{
				name: 'Exocraft',
				id: 'exocraft',
				url: 'https://exocraft.io',					
				thumbnail: '/img/games/exocraft.jpg',
				description: 'Build your unique exocraft and grow your fleet of drones in order to battle and mine your way to the top. Set in a dyaing alien world, Exocraft pits you and your friends against ancient guardians and other defenses protecting its most valuable resources.',
				category: 'shooter, robots, top down, coop, pvp'
			},
			{
				name: 'Hole',
				id: 'hole',
				url: 'https://hole.io',					
				thumbnail: '/img/games/hole.jpg',
				description: "You've been given a chance to control a black hole - a small one, but capable of consuming everything on its path. You move freely across a lively metropolis and  you can swallow cars, humans, fences, street lights and even multi-storey buildings, although in the beginning your abilities are modest and you will have to start by eating all sorts of small stuff. And to avoid letting you get bored or feel invincible there are other black holes in the area - they all want to eat and grow, but there can be only one leader - the fastest and the hungriest of them all.",
				category: 'battle, pvp, top down, eat'
			},
			{
				name: 'Relmz',
				id: 'relmz',
				url: 'https://relmz.io',					
				thumbnail: '/img/games/relmz.jpg',
				description: "Inspired by World Of Warcraft. Relmz is a mini mmo rpg io game all about fighting monsters and finding loot! Explore a mini world filled with dangerous monsters!",
				category: 'rpg, coop, mmo, loot'
			},
			{
				name: 'Robostorm',
				id: 'robostorm',
				url: 'https://robostorm.io',					
				thumbnail: '/img/games/robostorm.jpg',
				description: "Fast-paced multiplayer robot battle game. Challenge players around the world and enjoy juicy 3D destruction!",
				category: 'pvp, top down, shooter, robots'
			},
			{
				name: 'ToBattle',
				id: 'tobattle',
				url: 'https://tobattle.io',					
				thumbnail: '/img/games/tobattle.jpg',
				description: "ToBattle.io is a FPS game with death match and free for all modes. There is only station map on game but there will be more.",
				category: 'pvp, first person, shooter, fps'
			}  
		],		
		more: [
			{
				name: 'Squadd Royale',
				id: 'squaddroyale',
				url: 'https://squaddroyale.io',
				thumbnail: '/img/games/squaddroyale.jpg',
				description: 'Squadd Royale is a battle royale game, where you must kill your opponents and be the last one standing! Explore a large map running or driving vehicles, visit buildings to find weapons, ammo and power-ups. Gain XP and levels by finishing in the top 10 positions, and unlock skins, parachutes, emotes and flags.',
				category: 'battle royale, shooter, pvp, top down'
			},
			{
				name: 'Krunker',
				id: 'krunker',
				url: 'https://krunker.io',
				thumbnail: '/img/games/krunker.jpg',
				description: 'Browser Based Competitive First Person Shooter. Select a class that fits your playstyle and jump into the arena',
				category: 'shooter, fps, first person, pvp'
			},
			{
				name: 'Shell Shocker',
				id: 'shellshocker',
				url: 'https://shellshock.io',				
				thumbnail: '/img/games/shellshocker.jpg',
				description: 'The first browser-based First Person Egger! Get cracking! Choose your class and terminate your enemies with eggstreme prejudice in this 3d multplayer shooter. Equip lethal weapons like the Scramble Shotgun and EggK47 as you cluck your way to victory.',
				category: 'shooter, fps, first person, pvp'
			},
			{
				name: 'WarScrap',
				id: 'warscrap',
				url: 'https://warscrap.io',						
				thumbnail: '/img/games/warscrap.jpg',
				description: 'Mine resources, gear up, and prepare for epic base defense battles in this free to play, co-op multiplayer third-person shooter, 3D .io Game!',
				category: 'shooter, third person, coop, pve, robots'
			},
			{
				name: 'Hordes',
				id: 'hordes',
				url: 'https://hordes.io',					
				thumbnail: '/img/games/hordes.jpg',
				description: 'Hordes is one of the more unique games we feature, initially a massive different is its 3d aspect and game play, you wander around this 3d environment and aim to defeat monsters either solo or by teaming up with other players around the map.',
				category: 'rpg, pvp, pve'
			},
			{
				name: 'Squadd',
				id: 'squadd',
				url: 'https://squadd.io',					
				thumbnail: '/img/games/squadd.jpg',
				description: 'Squadd.io is a super fast paced shooting io game. The map is in a 3d world, and you can use tons of different types of weapons which can be found around the map.',
				category: 'shooter, pvp, top down'
			},
			{
				name: 'Blast Arena',
				id: 'blastarena',
				url: 'https://blastarena.io',					
				thumbnail: '/img/games/blastarena.jpg',
				description: 'Blastarena.io is an incredibly fun free for all arena game where you play as a small blocky character and place bombs in order to clear terrain and kill the other bombers. This game was originally based on the classic indie game bomberman and it does it great justice as its is similarly addictive! If you never played the original fear not as Blastarena.io is just as fun to play alone or with friends.',
				category: 'top down, pvp, bombs, power ups'
			},
			{
				name: 'DeadWalk',
				id: 'deadwalk',
				url: 'https://deadwalk.io',					
				thumbnail: '/img/games/deadwalk.jpg',
				description: "Hell is full, the dead are here! Deadwalk.io is a 3-D shooter where you must scavenge for weapons and upgrades while you fend off zombies and hunt down other players.  You probably never thought the post-apocalypse would be this fun!",
				category: 'shooter, pvp, third person, zombie, survival'
			},
			{
				name: 'Exocraft',
				id: 'exocraft',
				url: 'https://exocraft.io',					
				thumbnail: '/img/games/exocraft.jpg',
				description: 'Build your unique exocraft and grow your fleet of drones in order to battle and mine your way to the top. Set in a dyaing alien world, Exocraft pits you and your friends against ancient guardians and other defenses protecting its most valuable resources.',
				category: 'shooter, robots, top down, coop, pvp'
			},
			{
				name: 'Pie AI',
				id: 'pieai',
				url: 'https://pie.ai',					
				thumbnail: '/img/games/pieai.jpg',
				description: "Jump straight into the action to eat pies and other players. Unlock skill points to increase your power and armor in this fast-pace battle for survival.",
				category: 'battle, pvp, top down, eat'
			},
			{
				name: 'Hole',
				id: 'hole',
				url: 'https://hole.io',					
				thumbnail: '/img/games/hole.jpg',
				description: "You've been given a chance to control a black hole - a small one, but capable of consuming everything on its path. You move freely across a lively metropolis and  you can swallow cars, humans, fences, street lights and even multi-storey buildings, although in the beginning your abilities are modest and you will have to start by eating all sorts of small stuff. And to avoid letting you get bored or feel invincible there are other black holes in the area - they all want to eat and grow, but there can be only one leader - the fastest and the hungriest of them all.",
				category: 'battle, pvp, top down, eat'
			},
			{
				name: 'Relmz',
				id: 'relmz',
				url: 'https://relmz.io',					
				thumbnail: '/img/games/relmz.jpg',
				description: "Inspired by World Of Warcraft. Relmz is a mini mmo rpg io game all about fighting monsters and finding loot! Explore a mini world filled with dangerous monsters!",
				category: 'rpg, coop, mmo, loot'
			},
			{
				name: 'Robostorm',
				id: 'robostorm',
				url: 'https://robostorm.io',					
				thumbnail: '/img/games/robostorm.jpg',
				description: "Fast-paced multiplayer robot battle game. Challenge players around the world and enjoy juicy 3D destruction!",
				category: 'pvp, top down, shooter, robots'
			},
			{
				name: 'Skywars',
				id: 'skywars',
				url: 'https://skywars.io',					
				thumbnail: '/img/games/skywars.jpg',
				description: "Skywars.io is an .io game like no other! Play this game for awesome 3d aerial combat, and battle with other players around the world in epic dogfights in the sky over a mighty ocean.",
				category: 'pvp, sky, battle, planes'
			},
			{
				name: 'Tanks',
				id: 'tanks',
				url: 'https://tanksio.online',					
				thumbnail: '/img/games/tanks.jpg',
				description: "Fight together with your team in the arena against other players from around the world! Your team must be the first to commit 25 kills to win! Cover your teammates and grab power-ups appearing on the map. But do not give your life in vain! Remember that each frag is a step to victory both for you and your opponents!",
				category: 'tanks, robots, pvp, coop, battle, top down'
			},
			{
				name: 'ToBattle',
				id: 'tobattle',
				url: 'https://tobattle.io',					
				thumbnail: '/img/games/tobattle.jpg',
				description: "ToBattle.io is a FPS game with death match and free for all modes. There is only station map on game but there will be more.",
				category: 'pvp, first person, shooter, fps'
			},
			{
				name: 'SnowBall',
				id: 'snowball',
				url: 'https://snowball-io.io',					
				thumbnail: '/img/games/snowball.jpg',
				description: "Snowball.io is online Multiplayer io game. Make your snowball big and bump your opponents to kick them from snow arena.",
				category: 'pvp, snow, battle, top down'
			},	
			{
				name: 'Warbot',
				id: 'warbot',
				url: 'https://Warbot.io',					
				thumbnail: '/img/games/Warbot.jpg',
				description: "An infinite battle of hundred robots! Free For All, Last One Standing ... (60 players needed!), Survival Mission",
				category: 'pvp, battle royale, battle, robots, top down'
			}     				  			 			             
		],	
		favorites: []
	},
	search: {
		data: [
			{
				name: 'Squadd Royale',
				id: 'squaddroyale',
				url: 'https://squaddroyale.io',
				thumbnail: '/img/games/squaddroyale.jpg',
				description: 'Squadd Royale is a battle royale game, where you must kill your opponents and be the last one standing! Explore a large map running or driving vehicles, visit buildings to find weapons, ammo and power-ups. Gain XP and levels by finishing in the top 10 positions, and unlock skins, parachutes, emotes and flags.',
				category: 'battle royale, shooter, pvp, top down'
			},
			{
				name: 'Krunker',
				id: 'krunker',
				url: 'https://krunker.io',
				thumbnail: '/img/games/krunker.jpg',
				description: 'Browser Based Competitive First Person Shooter. Select a class that fits your playstyle and jump into the arena',
				category: 'shooter, fps, first person, pvp'
			},
			{
				name: 'Shell Shocker',
				id: 'shellshocker',
				url: 'https://shellshock.io',				
				thumbnail: '/img/games/shellshocker.jpg',
				description: 'The first browser-based First Person Egger! Get cracking! Choose your class and terminate your enemies with eggstreme prejudice in this 3d multplayer shooter. Equip lethal weapons like the Scramble Shotgun and EggK47 as you cluck your way to victory.',
				category: 'shooter, fps, first person, pvp'
			},
			{
				name: 'WarScrap',
				id: 'warscrap',
				url: 'https://warscrap.io',						
				thumbnail: '/img/games/warscrap.jpg',
				description: 'Mine resources, gear up, and prepare for epic base defense battles in this free to play, co-op multiplayer third-person shooter, 3D .io Game!',
				category: 'shooter, third person, coop, pve, robots'
			},
			{
				name: 'Hordes',
				id: 'hordes',
				url: 'https://hordes.io',					
				thumbnail: '/img/games/hordes.jpg',
				description: 'Hordes is one of the more unique games we feature, initially a massive different is its 3d aspect and game play, you wander around this 3d environment and aim to defeat monsters either solo or by teaming up with other players around the map.',
				category: 'rpg, pvp, pve'
			},
			{
				name: 'Squadd',
				id: 'squadd',
				url: 'https://squadd.io',					
				thumbnail: '/img/games/squadd.jpg',
				description: 'Squadd.io is a super fast paced shooting io game. The map is in a 3d world, and you can use tons of different types of weapons which can be found around the map.',
				category: 'shooter, pvp, top down'
			},
			{
				name: 'Blast Arena',
				id: 'blastarena',
				url: 'https://blastarena.io',					
				thumbnail: '/img/games/blastarena.jpg',
				description: 'Blastarena.io is an incredibly fun free for all arena game where you play as a small blocky character and place bombs in order to clear terrain and kill the other bombers. This game was originally based on the classic indie game bomberman and it does it great justice as its is similarly addictive! If you never played the original fear not as Blastarena.io is just as fun to play alone or with friends.',
				category: 'top down, pvp, bombs, power ups'
			},
			{
				name: 'DeadWalk',
				id: 'deadwalk',
				url: 'https://deadwalk.io',					
				thumbnail: '/img/games/deadwalk.jpg',
				description: "Hell is full, the dead are here! Deadwalk.io is a 3-D shooter where you must scavenge for weapons and upgrades while you fend off zombies and hunt down other players.  You probably never thought the post-apocalypse would be this fun!",
				category: 'shooter, pvp, third person, zombie, survival'
			},
			{
				name: 'Exocraft',
				id: 'exocraft',
				url: 'https://exocraft.io',					
				thumbnail: '/img/games/exocraft.jpg',
				description: 'Build your unique exocraft and grow your fleet of drones in order to battle and mine your way to the top. Set in a dyaing alien world, Exocraft pits you and your friends against ancient guardians and other defenses protecting its most valuable resources.',
				category: 'shooter, robots, top down, coop, pvp'
			},
			{
				name: 'Pie AI',
				id: 'pieai',
				url: 'https://pie.ai',					
				thumbnail: '/img/games/pieai.jpg',
				description: "Jump straight into the action to eat pies and other players. Unlock skill points to increase your power and armor in this fast-pace battle for survival.",
				category: 'battle, pvp, top down, eat'
			},
			{
				name: 'Hole',
				id: 'hole',
				url: 'https://hole.io',					
				thumbnail: '/img/games/hole.jpg',
				description: "You've been given a chance to control a black hole - a small one, but capable of consuming everything on its path. You move freely across a lively metropolis and  you can swallow cars, humans, fences, street lights and even multi-storey buildings, although in the beginning your abilities are modest and you will have to start by eating all sorts of small stuff. And to avoid letting you get bored or feel invincible there are other black holes in the area - they all want to eat and grow, but there can be only one leader - the fastest and the hungriest of them all.",
				category: 'battle, pvp, top down, eat'
			},
			{
				name: 'Relmz',
				id: 'relmz',
				url: 'https://relmz.io',					
				thumbnail: '/img/games/relmz.jpg',
				description: "Inspired by World Of Warcraft. Relmz is a mini mmo rpg io game all about fighting monsters and finding loot! Explore a mini world filled with dangerous monsters!",
				category: 'rpg, coop, mmo, loot'
			},
			{
				name: 'Robostorm',
				id: 'robostorm',
				url: 'https://robostorm.io',					
				thumbnail: '/img/games/robostorm.jpg',
				description: "Fast-paced multiplayer robot battle game. Challenge players around the world and enjoy juicy 3D destruction!",
				category: 'pvp, top down, shooter, robots'
			},
			{
				name: 'Skywars',
				id: 'skywars',
				url: 'https://skywars.io',					
				thumbnail: '/img/games/skywars.jpg',
				description: "Skywars.io is an .io game like no other! Play this game for awesome 3d aerial combat, and battle with other players around the world in epic dogfights in the sky over a mighty ocean.",
				category: 'pvp, sky, battle, planes'
			},
			{
				name: 'Tanks',
				id: 'tanks',
				url: 'https://tanksio.online',					
				thumbnail: '/img/games/tanks.jpg',
				description: "Fight together with your team in the arena against other players from around the world! Your team must be the first to commit 25 kills to win! Cover your teammates and grab power-ups appearing on the map. But do not give your life in vain! Remember that each frag is a step to victory both for you and your opponents!",
				category: 'tanks, robots, pvp, coop, battle, top down'
			},
			{
				name: 'ToBattle',
				id: 'tobattle',
				url: 'https://tobattle.io',					
				thumbnail: '/img/games/tobattle.jpg',
				description: "ToBattle.io is a FPS game with death match and free for all modes. There is only station map on game but there will be more.",
				category: 'pvp, first person, shooter, fps'
			},
			{
				name: 'SnowBall',
				id: 'snowball',
				url: 'https://snowball-io.io',					
				thumbnail: '/img/games/snowball.jpg',
				description: "Snowball.io is online Multiplayer io game. Make your snowball big and bump your opponents to kick them from snow arena.",
				category: 'pvp, snow, battle, top down'
			},	
			{
				name: 'Warbot',
				id: 'warbot',
				url: 'https://Warbot.io',					
				thumbnail: '/img/games/Warbot.jpg',
				description: "An infinite battle of hundred robots! Free For All, Last One Standing ... (60 players needed!), Survival Mission",
				category: 'pvp, battle royale, battle, robots, top down'
			}															
		],    
		results: []
	},
	route: {
		path: ''
	}	
};