OC.L10N.register(
    "news",
    {
    "Request failed, network connection unavailable!" : "Error en la sol·licitud, la connexió de xarxa no està disponible!",
    "Request unauthorized. Are you logged in?" : "Sol·licitud no autoritzada. Ha iniciat sessió?",
    "Request forbidden. Are you an admin?" : "Sol·licitud prohibida. És vostè un administrador?",
    "Token expired or app not enabled! Reload the page!" : "El Token està caducat o l'aplicació no està activada! Actualitzar pàgina!",
    "Internal server error! Please check your data/nextcloud.log file for additional information!" : "Error del servidor intern! Si us plau, comproveu el vostre fitxer data / nextcloud.log per obtenir informació addicional.",
    "Request failed, Nextcloud is in currently in maintenance mode!" : "La sol·licitud ha fallat, Nextcloud està actualment en mode de manteniment.",
    "Feed contains invalid XML" : "La font conté XML no vàlid",
    "Feed not found: Either the website does not provide a feed or blocks access. To rule out blocking, try to download the feed on your server's command line using curl: curl " : "No s'ha trobat el canal: ja sigui que el lloc web no proporciona cap feed ni accés a blocs. Per descartar el bloqueig, proveu de descarregar el feed a la lí­nia de comandaments del vostre servidor utilitzant Curl: curl ",
    "Detected feed format is not supported" : "No s'admet el format de la font detectada",
    "Website not found" : "El lloc web no es troba",
    "More redirects than allowed, aborting" : "Més redireccions del permès, avortant",
    "Bigger than maximum allowed size" : "Més gran que la grandària màxima permès",
    "Request timed out" : "Temps d'espera esgotat",
    "Required credentials for feed were either missing or incorrect" : "Les credencials necessàries per al feed no estaven o eren incorrectes",
    "Forbidden to access feed" : "Prohibit d'accedir a feed",
    "Certificate error: A problem occurred somewhere in the SSL/TLS handshake. Could be certificates (file formats, paths, permissions), passwords, and others." : "Error de certificat: s'ha produït un problema en l'enllaç de mans SSL / TLS. Podrien ser certificats (formats d'arxiu, rutes, permisos), contrasenyes i altres.",
    "Certificate error: The remote server's SSL certificate or SSH md5 fingerprint was deemed not OK." : "Error de certificat: el certificat SSL del servidor remot o l'empremta digital SSH md5 no es va considerar correcte.",
    "Certificate error: Problem with the local client certificate." : "Error del certificat: problema amb el certificat del client local.",
    "Certificate error: Couldn't use specified cipher." : "Error del certificat: no s'ha pogut utilitzar el xifrat especificat.",
    "Certificate error: Peer certificate cannot be authenticated with known CA certificates." : "Error de certificat: el certificat de Peer no es pot autenticar amb certificats CA coneguts.",
    "Certificate error: Requested FTP SSL level failed." : "Error del certificat: el nivell SSL de FTP sol·licitat ha fallat.",
    "Certificate error: Initiating the SSL engine failed." : "Error del certificat: ha fallat l'inici del motor SSL.",
    "Certificate error: Problem with reading the SSL CA cert (path? access rights?)" : "Error del certificat: problema amb llegir el cert CA de SSL (accés als drets d'accés?)",
    "Certificate error: Issuer check failed" : "Error de certificat: s'ha pogut verificar l'emissor",
    "Unknown SSL certificate error!" : "Error de certificat SSL desconegut",
    "Can not add feed: Exists already" : "No es pot afegir la font: ja existeix",
    "Articles without feed" : "Articles sense font",
    "Can not add folder: Exists already" : "No es pot afegir la carpeta: ja existeix",
    "News" : "Notí­cies",
    "An RSS/Atom feed reader" : "Un lector de notícies RSS/Atom",
    "The News app is an RSS/Atom feed reader for Nextcloud which can be synced with many mobile devices. A list of all clients and requirements can be found [in the README](https://github.com/nextcloud/news)\n\nBefore you update to a new version, [check the changelog](https://github.com/nextcloud/news/blob/master/CHANGELOG.md) to avoid surprises.\n\n**Important**: To enable feed updates you will need to enable either [Nextcloud system cron](https://docs.nextcloud.com/server/10/admin_manual/configuration_server/background_jobs_configuration.html#cron) or use [an updater](https://github.com/nextcloud/news-updater) which uses the built in update API and disable cron updates. More information can be found [in the README](https://github.com/nextcloud/news)." : "L'app de notícies és un lector de notícies RSS/Atom per a Nextcloud que es pot sincronitzar amb molts dispositius mòbils. Trobareu una llista de tots els clients i requisits [en el README] (https://github.com/nextcloud/news)\n\nAbans d’actualitzar a una nova versió, [consultar el changelog] (https://github.com/nextcloud/news/blob/master/CHANGELOG.md) per evitar sorpreses.\n\n**Important**: per permetre les actualitzacions de les fonts necessitaràs permetre o bé [Sistema cron de Nextcloud] (https://docs.nextcloud.com/server/10/admin_manual/configuration_server/background_jobs_configuration.html#cron) o utilitzar [un actualitzador] (https:// github.com/nextcloud/News-Updater) que utilitza l’API d’actualització propi a més de desactivar actualitzacions amb cron. Podeu trobar més informació [en el README] (https://github.com/nextcloud/news).",
    "Use system cron for updates" : "Utilitzeu el sistema cron per a les actualitzacions",
    "Disable this if you run a custom updater such as the Python updater included in the app" : "Deshabilita això si executes un actualitzador personalitzat com el actualitzador Python inclòs en la aplicació",
    "Purge interval" : "Interval de purga",
    "Minimum amount of seconds after deleted feeds and folders are removed from the database; values below 60 seconds are ignored" : "Nombre mí­nim de segons abans que les fonts i carpetes eliminades siguin eliminades definitivament de la base de dades; valors per sota de 60 segons seran ignorats.",
    "Maximum read count per feed" : "Màxim nombre de lectures per font",
    "Defines the maximum amount of articles that can be read per feed which won't be deleted by the cleanup job; if old articles reappear after being read, increase this value; negative values such as -1 will turn this feature off" : "Defineix la quantitat màxima d'articles que es poden llegir per feed que no s'esborraran en el treball de neteja; si reapareixen articles antics després d'haver estat llegits, augmenteu aquest valor; valors negatius, com -1, desactivaran aquesta caracterí­stica",
    "Maximum redirects" : "Màxim de redireccions",
    "How many redirects the feed fetcher should follow" : "Quantes redireccions hauria de suportar el descarregador de fonts?",
    "Maximum feed page size" : "Grandària màxima de pàgina de la font",
    "Maximum feed size in bytes. If the RSS/Atom page is bigger than this value, the update will be aborted" : "Màxima grandària de la font en bytes. Si la pàgina RSS/Atom és més gran que aquest valor, l'actualització serà cancel·lada",
    "Feed fetcher timeout" : "Temps d'espera esgotat per a la descàrrega de la font",
    "Maximum number of seconds to wait for an RSS or Atom feed to load; if it takes longer the update will be aborted" : "Nombre màxim de segons per esperar que carregui una font de RSS o Atom; si pren més temps, l'actualització serà cancel·lada.",
    "Explore Service URL" : "Explorar URL del Servei",
    "If given, this service's URL will be queried for displaying the feeds in the explore feed section. To fall back to the built in explore service, leave this input empty" : "En cas d'haver-se emplenat, la URL d'aquest servei serà consultada per mostrar les fonts de la secció explorar fonts. Per tornar al servei d'exploració integrat, deixi aquest camp buit",
    "For more information check the wiki" : "Per obtenir més informació, consulteu la wiki",
    "Saved" : "Desat",
    "Download" : "Descàrrega",
    "Close" : "Tanca",
    "filter" : "filtra",
    "Language" : "Idioma",
    "Subscribe" : "Subscriu",
    "Got more awesome feeds? Share them with us!" : "Teniu menus més increïbles? Compartiu-los amb nosaltres!",
    "No articles available" : "No hi ha articles disponibles",
    "No unread articles available" : "No hi ha articles disponibles sense llegir",
    "Open website" : "Obrir lloc web",
    "Star article" : "Article estrella",
    "Unstar article" : "Destaca l'article",
    "Keep article unread" : "Manteniu l'article no llegit",
    "Remove keep article unread" : "Elimineu l'article no llegit ",
    "by" : "per",
    "from" : "des de",
    "Play audio" : "Reproduir audio",
    "Download video" : "Descarrega video",
    "Download audio" : "Descarrega audio",
    "Keyboard shortcut" : "Drecera de teclat",
    "Description" : "Descripció",
    "right" : "dreta",
    "Jump to next article" : "Vés al proper article",
    "left" : "esquerra",
    "Jump to previous article" : "Anar a l'article anterior",
    "Toggle star article" : "Commuta l'article estrella",
    "Star article and jump to next one" : "Article estrella i saltar al segí¼ent",
    "Toggle keep current article unread" : "Canvia sense llegir l'article actual",
    "Open article in new tab" : "Obrir article en una finestra nova",
    "Toggle expand article in compact view" : "Commuta l'article d'ampliació en una vista compacta",
    "Refresh" : "Refresca",
    "Load next feed" : "Carregueu el feed segí¼ent",
    "Load previous feed" : "Carrega la font anterior",
    "Load next folder" : "Carrega la segí¼ent carpeta",
    "Load previous folder" : "Carrega la carpeta anterior",
    "Scroll to active navigation entry" : "Desplaça't cap a l'entrada de navegació activa",
    "Focus search field" : "Enfocament del camp de cerca",
    "Mark current article's feed/folder read" : "Marqueu els articles actuals, llegiu / llegeix la carpeta",
    "Ajax or webcron mode detected! Your feeds will not be updated!" : "S'ha detectat el mode Ajax o webcron. Els vostres feeds no s'actualitzaran.",
    "How to set up the operating system cron" : "Com configurar el sistema operatiu cron",
    "Install and set up a faster parallel updater that uses the News app's update API" : "Instal·leu i configureu un actualitzador paral·lel més ràpid que utilitzi l'API d'actualització de l'aplicació de notí­cies",
    "Non UTF-8 charset for MySQL/MariaDB database detected!" : "No s'ha detectat el joc de caràcters UTF-8 per a la base de dades MySQL / MariaDB!",
    "Learn how to convert your database to utf8mb4 (make a backup beforehand)" : "Obteniu informació sobre com convertir la vostra base de dades a utf8mb4 (feu una cópia de seguretat prèviament)",
    "Web address" : "Adreça web",
    "Feed exists already!" : "La font ja existeix!",
    "Folder" : "Carpeta",
    "No folder" : "Sense carpeta",
    "New folder" : "Carpeta nova",
    "Folder name" : "Nom de la carpeta",
    "Go back" : "Torna enrere",
    "Folder exists already!" : "La carpeta ja existeix!",
    "Advanced settings" : "Configuració avançada",
    "Credentials" : "Credencials",
    "HTTP Basic Auth credentials must be stored unencrypted! Everyone with access to the server or database will be able to access them!" : "Les credencials d'autenticació bàsica HTTP s'han d'emmagatzemar sense xifrar! Tothom amb accés al servidor o a la base de dades podrà accedir-hi.",
    "Username" : "Nom d'usuari",
    "Password" : "Contrasenya",
    "New Folder" : "Nova carpeta",
    "Create" : "Crea",
    "Explore" : "Explora",
    "Update failed more than 50 times" : "L'actualització ha fallat més de 50 vegades",
    "Deleted feed" : "El feed s'ha suprimit",
    "Undo delete feed" : "Desfés el feed d'esborrat",
    "Rename" : "Reanomena",
    "Menu" : "Men",
    "Mark read" : "Marqueu llegir",
    "Unpin from top" : "Torneu a picar des de dalt",
    "Pin to top" : "Pin a la part superior",
    "Newest first" : "Més nou primer",
    "Oldest first" : "Més vell primer",
    "Default order" : "Ordre per defecte",
    "Enable full text" : "Activa el text complet",
    "Disable full text" : "Desactiva el text complet",
    "Unread updated" : "Actualització no llegida",
    "Ignore updated" : "Ignora l'actualització",
    "Open feed URL" : "Obrir la URL font",
    "Delete" : "Esborra",
    "Dismiss" : "Rebutja",
    "Collapse" : "Col·lapsa",
    "Deleted folder" : "Elimina la carpeta",
    "Undo delete folder" : "borra la carpeta d'eliminació",
    "Starred" : "Estrelles",
    "Unread articles" : "Articles sense llegir",
    "All articles" : "Tots els articles",
    "Settings" : "Paràmetres",
    "Disable mark read through scrolling" : "Desactiva la marca de lectura mitjançant el desplaçament",
    "Compact view" : "Visualització compacta",
    "Expand articles on key navigation" : "Expandeixi articles sobre la navegació de tecles",
    "Show all articles" : "Mostrar tots els articles",
    "Reverse ordering (oldest on top)" : "Ordre invers (més antic a la part superior)",
    "Subscriptions (OPML)" : "Subscripcions (OPML)",
    "Import" : "Importa",
    "Export" : "Exporta",
    "Error when importing: File does not contain valid OPML" : "S'ha produït un error en importar: el fitxer no conté OPML vàlid",
    "Error when importing: OPML is does neither contain feeds nor folders" : "Error en importar: OPML no conté feeds ni carpetes",
    "Unread/Starred Articles" : "Articles no llegits/amb estrelles",
    "Error when importing: file does not contain valid JSON" : "Error en importar: el fitxer no conté un JSON vàlid",
    "Help" : "Ajuda",
    "Keyboard shortcuts" : "Dreceres de teclat",
    "Documentation" : "Documentació",
    "Report a bug" : "Reportar un bug"
},
"nplurals=2; plural=(n != 1);");
