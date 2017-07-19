/* To avoid CSS expressions while still supporting IE 7 and IE 6, use this script */
/* The script tag referring to this file must be placed before the ending body tag. */

(function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'momizat\'">' + entity + '</span>' + html;
	}
	var icons = {
		'momizat-icon-home': '&#xe600;',
		'momizat-icon-home2': '&#xe601;',
		'momizat-icon-home3': '&#xe602;',
		'momizat-icon-office': '&#xe603;',
		'momizat-icon-newspaper': '&#xe604;',
		'momizat-icon-pencil': '&#xe605;',
		'momizat-icon-pencil2': '&#xe606;',
		'momizat-icon-quill': '&#xe607;',
		'momizat-icon-pen': '&#xe608;',
		'momizat-icon-blog': '&#xe609;',
		'momizat-icon-droplet': '&#xe60a;',
		'momizat-icon-paint-format': '&#xe60b;',
		'momizat-icon-image': '&#xe60c;',
		'momizat-icon-image2': '&#xe60d;',
		'momizat-icon-images': '&#xe60e;',
		'momizat-icon-camera': '&#xe60f;',
		'momizat-icon-music': '&#xe610;',
		'momizat-icon-headphones': '&#xe611;',
		'momizat-icon-play': '&#xe612;',
		'momizat-icon-film': '&#xe613;',
		'momizat-icon-camera2': '&#xe614;',
		'momizat-icon-dice': '&#xe615;',
		'momizat-icon-pacman': '&#xe616;',
		'momizat-icon-spades': '&#xe617;',
		'momizat-icon-clubs': '&#xe618;',
		'momizat-icon-diamonds': '&#xe619;',
		'momizat-icon-pawn': '&#xe61a;',
		'momizat-icon-bullhorn': '&#xe61b;',
		'momizat-icon-connection': '&#xe61c;',
		'momizat-icon-podcast': '&#xe61d;',
		'momizat-icon-feed': '&#xe61e;',
		'momizat-icon-book': '&#xe61f;',
		'momizat-icon-books': '&#xe620;',
		'momizat-icon-library': '&#xe621;',
		'momizat-icon-file': '&#xe622;',
		'momizat-icon-profile': '&#xe623;',
		'momizat-icon-file2': '&#xe624;',
		'momizat-icon-file3': '&#xe625;',
		'momizat-icon-file4': '&#xe626;',
		'momizat-icon-copy': '&#xe627;',
		'momizat-icon-copy2': '&#xe628;',
		'momizat-icon-copy3': '&#xe629;',
		'momizat-icon-paste': '&#xe62a;',
		'momizat-icon-paste2': '&#xe62b;',
		'momizat-icon-paste3': '&#xe62c;',
		'momizat-icon-stack': '&#xe62d;',
		'momizat-icon-folder': '&#xe62e;',
		'momizat-icon-folder-open': '&#xe62f;',
		'momizat-icon-tag': '&#xe630;',
		'momizat-icon-tags': '&#xe631;',
		'momizat-icon-barcode': '&#xe632;',
		'momizat-icon-qrcode': '&#xe633;',
		'momizat-icon-ticket': '&#xe634;',
		'momizat-icon-cart': '&#xe635;',
		'momizat-icon-cart2': '&#xe636;',
		'momizat-icon-cart3': '&#xe637;',
		'momizat-icon-coin': '&#xe638;',
		'momizat-icon-credit': '&#xe639;',
		'momizat-icon-calculate': '&#xe63a;',
		'momizat-icon-support': '&#xe63b;',
		'momizat-icon-phone': '&#xe63c;',
		'momizat-icon-phone-hang-up': '&#xe63d;',
		'momizat-icon-address-book': '&#xe63e;',
		'momizat-icon-notebook': '&#xe63f;',
		'momizat-icon-envelope': '&#xe640;',
		'momizat-icon-pushpin': '&#xe641;',
		'momizat-icon-location': '&#xe642;',
		'momizat-icon-location2': '&#xe643;',
		'momizat-icon-compass': '&#xe644;',
		'momizat-icon-map': '&#xe645;',
		'momizat-icon-map2': '&#xe646;',
		'momizat-icon-history': '&#xe647;',
		'momizat-icon-clock': '&#xe648;',
		'momizat-icon-clock2': '&#xe649;',
		'momizat-icon-alarm': '&#xe64a;',
		'momizat-icon-alarm2': '&#xe64b;',
		'momizat-icon-bell': '&#xe64c;',
		'momizat-icon-stopwatch': '&#xe64d;',
		'momizat-icon-calendar': '&#xe64e;',
		'momizat-icon-calendar2': '&#xe64f;',
		'momizat-icon-print': '&#xe650;',
		'momizat-icon-keyboard': '&#xe651;',
		'momizat-icon-screen': '&#xe652;',
		'momizat-icon-laptop': '&#xe653;',
		'momizat-icon-mobile': '&#xe654;',
		'momizat-icon-mobile2': '&#xe655;',
		'momizat-icon-tablet': '&#xe656;',
		'momizat-icon-tv': '&#xe657;',
		'momizat-icon-cabinet': '&#xe658;',
		'momizat-icon-drawer': '&#xe659;',
		'momizat-icon-drawer2': '&#xe65a;',
		'momizat-icon-drawer3': '&#xe65b;',
		'momizat-icon-box-add': '&#xe65c;',
		'momizat-icon-box-remove': '&#xe65d;',
		'momizat-icon-download': '&#xe65e;',
		'momizat-icon-upload': '&#xe65f;',
		'momizat-icon-disk': '&#xe660;',
		'momizat-icon-storage': '&#xe661;',
		'momizat-icon-undo': '&#xe662;',
		'momizat-icon-redo': '&#xe663;',
		'momizat-icon-flip': '&#xe664;',
		'momizat-icon-flip2': '&#xe665;',
		'momizat-icon-undo2': '&#xe666;',
		'momizat-icon-redo2': '&#xe667;',
		'momizat-icon-forward': '&#xe668;',
		'momizat-icon-reply': '&#xe669;',
		'momizat-icon-bubble': '&#xe66a;',
		'momizat-icon-bubbles': '&#xe66b;',
		'momizat-icon-bubbles2': '&#xe66c;',
		'momizat-icon-bubble2': '&#xe66d;',
		'momizat-icon-bubbles3': '&#xe66e;',
		'momizat-icon-bubbles4': '&#xe66f;',
		'momizat-icon-user': '&#xe670;',
		'momizat-icon-users': '&#xe671;',
		'momizat-icon-user2': '&#xe672;',
		'momizat-icon-users2': '&#xe673;',
		'momizat-icon-user3': '&#xe674;',
		'momizat-icon-user4': '&#xe675;',
		'momizat-icon-quotes-left': '&#xe676;',
		'momizat-icon-busy': '&#xe677;',
		'momizat-icon-spinner': '&#xe678;',
		'momizat-icon-spinner2': '&#xe679;',
		'momizat-icon-spinner3': '&#xe67a;',
		'momizat-icon-spinner4': '&#xe67b;',
		'momizat-icon-spinner5': '&#xe67c;',
		'momizat-icon-spinner6': '&#xe67d;',
		'momizat-icon-binoculars': '&#xe67e;',
		'momizat-icon-search': '&#xe67f;',
		'momizat-icon-zoom-in': '&#xe680;',
		'momizat-icon-zoom-out': '&#xe681;',
		'momizat-icon-expand': '&#xe682;',
		'momizat-icon-contract': '&#xe683;',
		'momizat-icon-expand2': '&#xe684;',
		'momizat-icon-contract2': '&#xe685;',
		'momizat-icon-key': '&#xe686;',
		'momizat-icon-key2': '&#xe687;',
		'momizat-icon-lock': '&#xe688;',
		'momizat-icon-lock2': '&#xe689;',
		'momizat-icon-unlocked': '&#xe68a;',
		'momizat-icon-wrench': '&#xe68b;',
		'momizat-icon-settings': '&#xe68c;',
		'momizat-icon-equalizer': '&#xe68d;',
		'momizat-icon-cog': '&#xe68e;',
		'momizat-icon-cogs': '&#xe68f;',
		'momizat-icon-cog2': '&#xe690;',
		'momizat-icon-hammer': '&#xe691;',
		'momizat-icon-wand': '&#xe692;',
		'momizat-icon-aid': '&#xe693;',
		'momizat-icon-bug': '&#xe694;',
		'momizat-icon-pie': '&#xe695;',
		'momizat-icon-stats': '&#xe696;',
		'momizat-icon-bars': '&#xe697;',
		'momizat-icon-bars2': '&#xe698;',
		'momizat-icon-gift': '&#xe699;',
		'momizat-icon-trophy': '&#xe69a;',
		'momizat-icon-glass': '&#xe69b;',
		'momizat-icon-mug': '&#xe69c;',
		'momizat-icon-food': '&#xe69d;',
		'momizat-icon-leaf': '&#xe69e;',
		'momizat-icon-rocket': '&#xe69f;',
		'momizat-icon-meter': '&#xe6a0;',
		'momizat-icon-meter2': '&#xe6a1;',
		'momizat-icon-dashboard': '&#xe6a2;',
		'momizat-icon-hammer2': '&#xe6a3;',
		'momizat-icon-fire': '&#xe6a4;',
		'momizat-icon-lab': '&#xe6a5;',
		'momizat-icon-magnet': '&#xe6a6;',
		'momizat-icon-remove': '&#xe6a7;',
		'momizat-icon-remove2': '&#xe6a8;',
		'momizat-icon-briefcase': '&#xe6a9;',
		'momizat-icon-airplane': '&#xe6aa;',
		'momizat-icon-truck': '&#xe6ab;',
		'momizat-icon-road': '&#xe6ac;',
		'momizat-icon-accessibility': '&#xe6ad;',
		'momizat-icon-target': '&#xe6ae;',
		'momizat-icon-shield': '&#xe6af;',
		'momizat-icon-lightning': '&#xe6b0;',
		'momizat-icon-switch': '&#xe6b1;',
		'momizat-icon-power-cord': '&#xe6b2;',
		'momizat-icon-signup': '&#xe6b3;',
		'momizat-icon-list': '&#xe6b4;',
		'momizat-icon-list2': '&#xe6b5;',
		'momizat-icon-numbered-list': '&#xe6b6;',
		'momizat-icon-menu': '&#xe6b7;',
		'momizat-icon-menu2': '&#xe6b8;',
		'momizat-icon-tree': '&#xe6b9;',
		'momizat-icon-cloud': '&#xe6ba;',
		'momizat-icon-cloud-download': '&#xe6bb;',
		'momizat-icon-cloud-upload': '&#xe6bc;',
		'momizat-icon-download2': '&#xe6bd;',
		'momizat-icon-upload2': '&#xe6be;',
		'momizat-icon-download3': '&#xe6bf;',
		'momizat-icon-upload3': '&#xe6c0;',
		'momizat-icon-globe': '&#xe6c1;',
		'momizat-icon-earth': '&#xe6c2;',
		'momizat-icon-link': '&#xe6c3;',
		'momizat-icon-flag': '&#xe6c4;',
		'momizat-icon-attachment': '&#xe6c5;',
		'momizat-icon-eye': '&#xe6c6;',
		'momizat-icon-eye-blocked': '&#xe6c7;',
		'momizat-icon-eye2': '&#xe6c8;',
		'momizat-icon-bookmark': '&#xe6c9;',
		'momizat-icon-bookmarks': '&#xe6ca;',
		'momizat-icon-brightness-medium': '&#xe6cb;',
		'momizat-icon-brightness-contrast': '&#xe6cc;',
		'momizat-icon-contrast': '&#xe6cd;',
		'momizat-icon-star': '&#xe6ce;',
		'momizat-icon-star2': '&#xe6cf;',
		'momizat-icon-star3': '&#xe6d0;',
		'momizat-icon-heart': '&#xe6d1;',
		'momizat-icon-heart2': '&#xe6d2;',
		'momizat-icon-heart-broken': '&#xe6d3;',
		'momizat-icon-thumbs-up': '&#xe6d4;',
		'momizat-icon-thumbs-up2': '&#xe6d5;',
		'momizat-icon-happy': '&#xe6d6;',
		'momizat-icon-happy2': '&#xe6d7;',
		'momizat-icon-smiley': '&#xe6d8;',
		'momizat-icon-smiley2': '&#xe6d9;',
		'momizat-icon-tongue': '&#xe6da;',
		'momizat-icon-tongue2': '&#xe6db;',
		'momizat-icon-sad': '&#xe6dc;',
		'momizat-icon-sad2': '&#xe6dd;',
		'momizat-icon-wink': '&#xe6de;',
		'momizat-icon-wink2': '&#xe6df;',
		'momizat-icon-grin': '&#xe6e0;',
		'momizat-icon-grin2': '&#xe6e1;',
		'momizat-icon-cool': '&#xe6e2;',
		'momizat-icon-cool2': '&#xe6e3;',
		'momizat-icon-angry': '&#xe6e4;',
		'momizat-icon-angry2': '&#xe6e5;',
		'momizat-icon-evil': '&#xe6e6;',
		'momizat-icon-evil2': '&#xe6e7;',
		'momizat-icon-shocked': '&#xe6e8;',
		'momizat-icon-shocked2': '&#xe6e9;',
		'momizat-icon-confused': '&#xe6ea;',
		'momizat-icon-confused2': '&#xe6eb;',
		'momizat-icon-neutral': '&#xe6ec;',
		'momizat-icon-neutral2': '&#xe6ed;',
		'momizat-icon-wondering': '&#xe6ee;',
		'momizat-icon-wondering2': '&#xe6ef;',
		'momizat-icon-point-up': '&#xe6f0;',
		'momizat-icon-point-right': '&#xe6f1;',
		'momizat-icon-point-down': '&#xe6f2;',
		'momizat-icon-point-left': '&#xe6f3;',
		'momizat-icon-warning': '&#xe6f4;',
		'momizat-icon-notification': '&#xe6f5;',
		'momizat-icon-question': '&#xe6f6;',
		'momizat-icon-info': '&#xe6f7;',
		'momizat-icon-info2': '&#xe6f8;',
		'momizat-icon-blocked': '&#xe6f9;',
		'momizat-icon-cancel-circle': '&#xe6fa;',
		'momizat-icon-checkmark-circle': '&#xe6fb;',
		'momizat-icon-spam': '&#xe6fc;',
		'momizat-icon-close': '&#xe6fd;',
		'momizat-icon-checkmark': '&#xe6fe;',
		'momizat-icon-checkmark2': '&#xe6ff;',
		'momizat-icon-spell-check': '&#xe700;',
		'momizat-icon-minus': '&#xe701;',
		'momizat-icon-plus': '&#xe702;',
		'momizat-icon-enter': '&#xe703;',
		'momizat-icon-exit': '&#xe704;',
		'momizat-icon-play2': '&#xe705;',
		'momizat-icon-pause': '&#xe706;',
		'momizat-icon-stop': '&#xe707;',
		'momizat-icon-backward': '&#xe708;',
		'momizat-icon-forward2': '&#xe709;',
		'momizat-icon-play3': '&#xe70a;',
		'momizat-icon-pause2': '&#xe70b;',
		'momizat-icon-stop2': '&#xe70c;',
		'momizat-icon-backward2': '&#xe70d;',
		'momizat-icon-forward3': '&#xe70e;',
		'momizat-icon-first': '&#xe70f;',
		'momizat-icon-last': '&#xe710;',
		'momizat-icon-previous': '&#xe711;',
		'momizat-icon-next': '&#xe712;',
		'momizat-icon-eject': '&#xe713;',
		'momizat-icon-volume-high': '&#xe714;',
		'momizat-icon-volume-medium': '&#xe715;',
		'momizat-icon-volume-low': '&#xe716;',
		'momizat-icon-volume-mute': '&#xe717;',
		'momizat-icon-volume-mute2': '&#xe718;',
		'momizat-icon-volume-increase': '&#xe719;',
		'momizat-icon-volume-decrease': '&#xe71a;',
		'momizat-icon-loop': '&#xe71b;',
		'momizat-icon-loop2': '&#xe71c;',
		'momizat-icon-loop3': '&#xe71d;',
		'momizat-icon-shuffle': '&#xe71e;',
		'momizat-icon-arrow-up-left': '&#xe71f;',
		'momizat-icon-arrow-up': '&#xe720;',
		'momizat-icon-arrow-up-right': '&#xe721;',
		'momizat-icon-arrow-right': '&#xe722;',
		'momizat-icon-arrow-down-right': '&#xe723;',
		'momizat-icon-arrow-down': '&#xe724;',
		'momizat-icon-arrow-down-left': '&#xe725;',
		'momizat-icon-arrow-left': '&#xe726;',
		'momizat-icon-arrow-up-left2': '&#xe727;',
		'momizat-icon-arrow-up2': '&#xe728;',
		'momizat-icon-arrow-up-right2': '&#xe729;',
		'momizat-icon-arrow-right2': '&#xe72a;',
		'momizat-icon-arrow-down-right2': '&#xe72b;',
		'momizat-icon-arrow-down2': '&#xe72c;',
		'momizat-icon-arrow-down-left2': '&#xe72d;',
		'momizat-icon-arrow-left2': '&#xe72e;',
		'momizat-icon-arrow-up-left3': '&#xe72f;',
		'momizat-icon-arrow-up3': '&#xe730;',
		'momizat-icon-arrow-up-right3': '&#xe731;',
		'momizat-icon-arrow-right3': '&#xe732;',
		'momizat-icon-arrow-down-right3': '&#xe733;',
		'momizat-icon-arrow-down3': '&#xe734;',
		'momizat-icon-arrow-down-left3': '&#xe735;',
		'momizat-icon-arrow-left3': '&#xe736;',
		'momizat-icon-tab': '&#xe737;',
		'momizat-icon-checkbox-checked': '&#xe738;',
		'momizat-icon-checkbox-unchecked': '&#xe739;',
		'momizat-icon-checkbox-partial': '&#xe73a;',
		'momizat-icon-radio-checked': '&#xe73b;',
		'momizat-icon-radio-unchecked': '&#xe73c;',
		'momizat-icon-crop': '&#xe73d;',
		'momizat-icon-scissors': '&#xe73e;',
		'momizat-icon-filter': '&#xe73f;',
		'momizat-icon-filter2': '&#xe740;',
		'momizat-icon-font': '&#xe741;',
		'momizat-icon-text-height': '&#xe742;',
		'momizat-icon-text-width': '&#xe743;',
		'momizat-icon-bold': '&#xe744;',
		'momizat-icon-underline': '&#xe745;',
		'momizat-icon-italic': '&#xe746;',
		'momizat-icon-strikethrough': '&#xe747;',
		'momizat-icon-omega': '&#xe748;',
		'momizat-icon-sigma': '&#xe749;',
		'momizat-icon-table': '&#xe74a;',
		'momizat-icon-table2': '&#xe74b;',
		'momizat-icon-insert-template': '&#xe74c;',
		'momizat-icon-pilcrow': '&#xe74d;',
		'momizat-icon-left-toright': '&#xe74e;',
		'momizat-icon-right-toleft': '&#xe74f;',
		'momizat-icon-paragraph-left': '&#xe750;',
		'momizat-icon-paragraph-center': '&#xe751;',
		'momizat-icon-paragraph-right': '&#xe752;',
		'momizat-icon-paragraph-justify': '&#xe753;',
		'momizat-icon-paragraph-left2': '&#xe754;',
		'momizat-icon-paragraph-center2': '&#xe755;',
		'momizat-icon-paragraph-right2': '&#xe756;',
		'momizat-icon-paragraph-justify2': '&#xe757;',
		'momizat-icon-indent-increase': '&#xe758;',
		'momizat-icon-indent-decrease': '&#xe759;',
		'momizat-icon-new-tab': '&#xe75a;',
		'momizat-icon-embed': '&#xe75b;',
		'momizat-icon-code': '&#xe75c;',
		'momizat-icon-console': '&#xe75d;',
		'momizat-icon-share': '&#xe75e;',
		'momizat-icon-mail': '&#xe75f;',
		'momizat-icon-mail2': '&#xe760;',
		'momizat-icon-mail3': '&#xe761;',
		'momizat-icon-mail4': '&#xe762;',
		'momizat-icon-google': '&#xe763;',
		'momizat-icon-google-plus': '&#xe764;',
		'momizat-icon-google-plus2': '&#xe765;',
		'momizat-icon-google-plus3': '&#xe766;',
		'momizat-icon-google-plus4': '&#xe767;',
		'momizat-icon-google-drive': '&#xe768;',
		'momizat-icon-facebook': '&#xe769;',
		'momizat-icon-facebook2': '&#xe76a;',
		'momizat-icon-facebook3': '&#xe76b;',
		'momizat-icon-instagram': '&#xe76c;',
		'momizat-icon-twitter': '&#xe76d;',
		'momizat-icon-twitter2': '&#xe76e;',
		'momizat-icon-twitter3': '&#xe76f;',
		'momizat-icon-feed2': '&#xe770;',
		'momizat-icon-feed3': '&#xe771;',
		'momizat-icon-feed4': '&#xe772;',
		'momizat-icon-youtube': '&#xe773;',
		'momizat-icon-youtube2': '&#xe774;',
		'momizat-icon-vimeo': '&#xe775;',
		'momizat-icon-vimeo2': '&#xe776;',
		'momizat-icon-vimeo3': '&#xe777;',
		'momizat-icon-lanyrd': '&#xe778;',
		'momizat-icon-flickr': '&#xe779;',
		'momizat-icon-flickr2': '&#xe77a;',
		'momizat-icon-flickr3': '&#xe77b;',
		'momizat-icon-flickr4': '&#xe77c;',
		'momizat-icon-picassa': '&#xe77d;',
		'momizat-icon-picassa2': '&#xe77e;',
		'momizat-icon-dribbble': '&#xe77f;',
		'momizat-icon-dribbble2': '&#xe780;',
		'momizat-icon-dribbble3': '&#xe781;',
		'momizat-icon-forrst': '&#xe782;',
		'momizat-icon-forrst2': '&#xe783;',
		'momizat-icon-deviantart': '&#xe784;',
		'momizat-icon-deviantart2': '&#xe785;',
		'momizat-icon-steam': '&#xe786;',
		'momizat-icon-steam2': '&#xe787;',
		'momizat-icon-github': '&#xe788;',
		'momizat-icon-github2': '&#xe789;',
		'momizat-icon-github3': '&#xe78a;',
		'momizat-icon-github4': '&#xe78b;',
		'momizat-icon-github5': '&#xe78c;',
		'momizat-icon-wordpress': '&#xe78d;',
		'momizat-icon-wordpress2': '&#xe78e;',
		'momizat-icon-joomla': '&#xe78f;',
		'momizat-icon-blogger': '&#xe790;',
		'momizat-icon-blogger2': '&#xe791;',
		'momizat-icon-tumblr': '&#xe792;',
		'momizat-icon-tumblr2': '&#xe793;',
		'momizat-icon-yahoo': '&#xe794;',
		'momizat-icon-tux': '&#xe795;',
		'momizat-icon-apple': '&#xe796;',
		'momizat-icon-finder': '&#xe797;',
		'momizat-icon-android': '&#xe798;',
		'momizat-icon-windows': '&#xe799;',
		'momizat-icon-windows8': '&#xe79a;',
		'momizat-icon-soundcloud': '&#xe79b;',
		'momizat-icon-soundcloud2': '&#xe79c;',
		'momizat-icon-skype': '&#xe79d;',
		'momizat-icon-reddit': '&#xe79e;',
		'momizat-icon-linkedin': '&#xe79f;',
		'momizat-icon-lastfm': '&#xe7a0;',
		'momizat-icon-lastfm2': '&#xe7a1;',
		'momizat-icon-delicious': '&#xe7a2;',
		'momizat-icon-stumbleupon': '&#xe7a3;',
		'momizat-icon-stumbleupon2': '&#xe7a4;',
		'momizat-icon-stackoverflow': '&#xe7a5;',
		'momizat-icon-pinterest': '&#xe7a6;',
		'momizat-icon-pinterest2': '&#xe7a7;',
		'momizat-icon-xing': '&#xe7a8;',
		'momizat-icon-xing2': '&#xe7a9;',
		'momizat-icon-flattr': '&#xe7aa;',
		'momizat-icon-foursquare': '&#xe7ab;',
		'momizat-icon-foursquare2': '&#xe7ac;',
		'momizat-icon-paypal': '&#xe7ad;',
		'momizat-icon-paypal2': '&#xe7ae;',
		'momizat-icon-paypal3': '&#xe7af;',
		'momizat-icon-yelp': '&#xe7b0;',
		'momizat-icon-libreoffice': '&#xe7b1;',
		'momizat-icon-file-pdf': '&#xe7b2;',
		'momizat-icon-file-openoffice': '&#xe7b3;',
		'momizat-icon-file-word': '&#xe7b4;',
		'momizat-icon-file-excel': '&#xe7b5;',
		'momizat-icon-file-zip': '&#xe7b6;',
		'momizat-icon-file-powerpoint': '&#xe7b7;',
		'momizat-icon-file-xml': '&#xe7b8;',
		'momizat-icon-file-css': '&#xe7b9;',
		'momizat-icon-html5': '&#xe7ba;',
		'momizat-icon-html52': '&#xe7bb;',
		'momizat-icon-css3': '&#xe7bc;',
		'momizat-icon-chrome': '&#xe7bd;',
		'momizat-icon-firefox': '&#xe7be;',
		'momizat-icon-IE': '&#xe7bf;',
		'momizat-icon-opera': '&#xe7c0;',
		'momizat-icon-safari': '&#xe7c1;',
		'momizat-icon-IcoMoon': '&#xe7c2;',
		'0': 0
		},
		els = document.getElementsByTagName('*'),
		i, attr, c, el;
	for (i = 0; ; i += 1) {
		el = els[i];
		if(!el) {
			break;
		}
		attr = el.getAttribute('data-icon');
		if (attr) {
			addIcon(el, attr);
		}
		c = el.className;
		c = c.match(/momizat-icon-[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
}());
