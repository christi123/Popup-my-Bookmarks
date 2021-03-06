## 6.0.0 (not yet released)
Improvements:
  - Reduce file size by using `woff2` instead of `woff` and removing trivial dependencies & polyfills like `promise` and `regenerator`

Changes:
  - Increase minimum Chrome version from 34 to 51

## 5.1.2 (26/9/2017)
Bugfixes:
  - Cannot drag item into empty folder

Others:
  - Update bitcoin donation url

## 5.1.1 (6/4/2017)
Bugfixes:
  - Bookmark icon shrinks if title is too long

## 5.1.0 (6/4/2017)
Changes:
  - Use `Alt + Shift + B` as keyboard shortcut (reported by n8wood in [#63](https://github.com/foray1010/Popup-my-Bookmarks/issues/63#issuecomment-291903966))

Improvements:
  - Greatly improve performance when you have a very large set of bookmarks in the same folder

## 5.0.5 (30/3/2017)
Bugfixes:
  - Should not allow to trigger contextmenu by CTRL key on Windows
  - Should not trigger contextmenu multiple time by long press

## 5.0.4 (29/3/2017)
Bugfixes:
  - Cannot use Norwegian Bokmål locale (again)

## 5.0.3 (29/3/2017)
Bugfixes:
  - Cannot use Norwegian Bokmål locale

## 5.0.2 (27/3/2017)
Changes:
  - Use `Ctrl / CMD + Shift + B` as keyboard shortcut (reported by kaitan32 in [#63](https://github.com/foray1010/Popup-my-Bookmarks/issues/63))

## 5.0.1 (25/3/2017)
Bugfixes:
  - Wrong image/font path in css

## 5.0.0 (25/3/2017)
Features:
  - Open popup by Ctrl / CMD + B (suggested by Sebastian B)
  - Use `Tab` and `Shift + Tab` to navigate bookmarks
  - Support trigger context menu by `Menu Key`

Changes:
  - Increase minimum Chrome version from 26 to 34
  - New option page (following options V2 standard)
  - Support all kind of separators in separatethis.com
  - Remove option: `Bookmarklet supported`, now we always support bookmarklet without permission `Read and change all your data on the websites you visit`

Bugfixes:
  - Cannot `Copy` a folder
  - Cannot display the whole popup in OSX
  - Wrong menu/editor position in some situations
  - Setting of `Hide root folder` will be lost on second save
  - `Remember last position` may fail if `Default expanded folder` is changed
  - `Remember last position` may fail if any last used folder is removed

Translations:
  - Support Norwegian Bokmål locales (thanks Bjorn Tore Asheim)
  - Locales update: French(Alexis Schapman)

## 4.0.2.812 (8/12/2016)
Bugfixes:
  - Middle click is not working on Chrome 55

## 4.0.1.706 (7/6/2015)
Improvements:
  - Dragging is now much more sensitive

Bugfixes:
  - Drag fail easily on Windows

## 4.0.0.706 (7/6/2015)
Features:
  - Keyboard Navigation

Changes:
  - Increase minimum Chrome version from 20 to 26
  - More compact layout
  - 'Open all bookmarks' now ignore separators
  - Close folder by clicking its folder item when using Left Click mode (suggested by Bram Jacob)
  - Close folder by clicking its box shadow when using Left Click mode

Improvements:
  - More precise drag indicator
  - Scroll the created item into view
  - Resize the height of interface when displaying drag indicator

Bugfixes:
  - Drag indicator may still appear after dragging is ended
  - Drag indicator appears next to the dragged item in some special cases
  - Tooltip displays after separator has been edited
  - Weird display of separator when using Chrome(Linux)
  - Wrong editor position in some special cases

## 3.1.4.2802 (28/2/2015)
Bugfixes:
  - Cannot restore last position in some special cases (reported by KyosukeAce)

## 3.1.3.2702 (27/2/2015)
Improvements:
  - Scroll back to the top when searching

## 3.1.2.2602 (26/2/2015)
Bugfixes:
  - Cannot save correct last position when dragging scrollbar (reported by KyosukeAce)

## 3.1.1.2602 (26/2/2015)
Bugfixes:
  - Fix logic error in moving bookmarks when option 'Open folders by Left Click' is activated
  - Fix menu item cannot toggle visibility correctly

## 3.1.0.2302 (23/2/2015)
Options:
  - Font family (suggested by Leebeaut Paul and David Bryant)
  - Hide root folder (suggested by David Bryant)
  - Remove 'Hide folder "Mobile bookmarks" if exists'

Changes:
  - The options of 'Default expanded folder' are now depended on the root folders you have
  - Highlight the default folder name when creating a new folder (Inspired by Dennis Long)

Bugfixes:
  - Fix wrong index when setting option 'Default expanded folder' in Opera

Improvements:
  - Dragging is now much easier (a problem since the previous version)
  - Reduce the sensitivity of closing folder when hovering its shadow

Translations:
  - Support Russian locales (thanks Другие закладки)
  - Locales update: Korean(Jinhyeok Lee)

## 3.0.0.506 (5/6/2014)
Features:
  - Add Breadcrumb to tooltips during search (inspired by Ashish Bogawat)

Options:
  - Remember last position (suggested by Роман Дрэйк, Ke Han)

Changes:
  - Middle clicking folder or clicking "Open in background tab" will close the popup (suggested by John Cawthorne)
  - Use native Chrome context menu when right clicking "input" element

Bugfixes:
  - Folders are displayed on search results
  - Some search results assigned with incorrect menu
  - Cannot expand folder sometimes when dragging (reported by David Bryant)

Improvements:
  - Wider scrollbar (suggested by Fischers Fritze)
  - Selection sort algorithm for "Sort by name", less chances to reach the maximum number of bookmarks operations per hour
  - Optimized algorithm for dragging, much smoother

Translations:
  - Support Dutch locales (thanks Marzas)
  - Locales update: French(foX aCe), Italian(Giacomo Fabio Leone)

Others:
  - A fresh new UI

## 2.2.0.1111 (11/11/2013)
Changes:
  - Header's font is changed to 'Archivo Narrow' and is integrated to PmB (Size: 50KB)

Bugfixes:
  - Can't scroll while using user-defined font (reported by David Bryant)

## 2.1.0.2910 (29/10/2013)
Features:
  - "Close" button for closing folder (inspired by Tom Sengers)

Improvements:
  - Hovering bookmark won't close folder in "Open folders by Left Click" mode

## 2.0.1.1710 (17/10/2013)
Bugfixes:
  - Unselected bookmark is highlighted when dragging at specific condition

Improvements:
  - More accurate search result
  - Avoid showing separtors in search result

Translations:
  - Locales update: Korean(Jinhyeok Lee)

## 2.0.0.2209 (22/9/2013)
Features:
  - (Menu) Sort by name (suggested by Steven Pribilinskiy)

Changes:
  - Shortened title of separator (inspired by Steven Pribilinskiy)
  - Search results are now in Alphabetical order

Options:
  - Search queries allowed

Bugfixes:
  - Deadloop bug when copying a folder to itself
  - Item may be removed sometimes when dragging

Improvements:
  - Speed up searching

Translations:
  - Locales update: French(foX aCe), Italian(Giacomo Fabio Leone)

## 1.9.1.1808 (18/8/2013)
Translations:
  - Support German locales (thanks Gurkan ZENGIN)
  - Locales update: French(foX aCe), Italian(Giacomo Fabio Leone), Korean(Jinhyeok Lee), Vietnamese(Phan Anh)

## 1.9.0.1508 (15/8/2013)
Features:
  - Support bookmarklet (reported by Chris Hagen)

Changes:
  - Create new folder only when confirmed (suggested by David Bryant)

Bugfixes:
  - Can't show the last item in a folder with scrollbar displayed (reported by David Bryant)

Translations:
  - Support Korean locales (thanks Jinhyeok Lee)

## 1.8.4.1008 (10/8/2013)
Bugfixes:
  - Can't scroll while dragging (reported by David Bryant)

Translations:
  - Support Italian locales (thanks Giacomo Fabio Leone)

## 1.8.3.608 (6/8/2013)
Bugfixes:
  - Can't paste a folder with its subfolder content (reported by David Bryant)
  - "No bookmark" indicator doesn't show in the root

Translations:
  - Locales update: French(foX aCe), Vietnamese(Phan Anh)

## 1.8.2.2907 (29/7/2013)
Improvements:
  - The style of separator
  - Favicons can be enlarged with font size
  - Popup bookmark editor after adding folder

## 1.8.1.2807 (28/7/2013)
Changes:
  - Rearrange the order in menu

Translations:
  - Support Vietnamese locales (thanks Phan Anh)

## 1.8.0.2607 (26/7/2013)
Features:
  - Add separators

Options:
  - Font size

Bugfixes:
  - Can't add folder in empty folder (reported by David Bryant)

## 1.7.2.2407 (24/7/2013)
Features:
  - Color indicator for "Cut, Copy & Paste"

Changes:
  - New bookmarks and folders are now inserted under the item you right clicked

Bugfixes:
  - Can't paste in empty folder

## 1.7.1.1707 (17/7/2013)
Translations:
  - Locales update: French(foX aCe)

## 1.7.0.1007 (10/7/2013)
Features:
  - Cut, Copy & Paste on the context menu (suggested by David Bryant)

Changes:
  - The height and width of PmB are now auto stretched when needed

Bugfixes:
  - Context menu isn't showed completely in some specific situations

## 1.6.5.307 (3/7/2013)
Improvements:
  - Algorithm of closing the cover between folders

## 1.6.4.207 (2/7/2013)
Improvements:
  - Reduce the chance of closing the cover between folders mistakenly (inspired by David Bryant)
  - The cover between folders can be closed by left click

Bugfixes:
  - Can't rename folder in "Open folders by Left Click" mode (reported by David Bryant)

## 1.6.3.3006 (30/6/2013)
Bugfixes:
  - Can't move bookmarks to main folder (reported by David Bryant)

## 1.6.2.2906 (29/6/2013)
Options:
  - Open folders by Left Click

Bugfixes:
  - Can't move bookmarks to the first place of folders (reported by David Bryant)

## 1.6.1.2306 (23/6/2013)
Bugfixes:
  - When dragging bookmark on the original position, drag indicator may be displayed

Improvements:
  - Reduce the sensitivity of hovering folders (suggested by David Bryant)
  - Reduce RAM usage

Translations:
  - Support French locales (thanks foX aCe)

## 1.6.0.206 (2/6/2013)
Changes:
  - Folder name's font changed to "Arial Narrow"

Options:
  - Left/ Ctrl+Left/ Shift+Left/ Middle Click to open bookmarks in specified location (inspired by Ahmad Moawya)
  - Remove "Always open bookmark in new tab"

Improvements:
  - Better color scheme and layout (hopefully)

## 1.5.1.1505 (15/5/2013)
Bugfixes:
  - The height of bookmark tree may be incorrect after searching

## 1.5.0.1305 (13/5/2013)
Features:
  - Ctrl + Click to open bookmarks w/o closing the popup (suggested by Cantate Domino)

Options:
  - Always open bookmark in new tab (suggested by bryan wang)

Improvements:
  - Expand folders smoothly
  - Smoother searching
  - Scrolling distance now also depends on mouse wheel speed
  - New options won't reset saved settings anymore

## 1.4.1.2904 (29/4/2013)
Changes:
  - Folder name's font changed to "Agency FB" (inspired by Timo Oster)

## 1.4.0.2604 (26/4/2013)
Features:
  - Middle click mouse to open all bookmarks (suggested by George Dekavalas)

Changes:
  - Scrolling distance now depends on the height of a item (suggested by DiegoPerotti)

Options:
  - Warn me when opening multiple tabs might slow down Chrome (suggested by George Dekavalas)

## 1.3.0.1404 (14/4/2013)
Changes:
  - When a bookmark's title is null, show its url instead of title (suggested by DiegoPerotti)

Bugfixes:
  - Rename or delete bookmarks on search page may not be shown
  - The height is not set correctly in some cases
  - (Temporary) Duplicated scroll bar on Mac OS (reported by NightRain)

Improvements:
  - Dragging improvement
  - UI improvement: Right Click Menu

## 1.2.0.904 (9/4/2013)
Bugfixes:
  - Index is not correct when dragging an item downward in the same folder

## 1.1.1.404 (4/4/2013)
Improvements:
  - UI improvement

## 1.1.0.3103 (31/3/2013)
Features:
  - Scrolling Animation

Bugfixes:
  - Unable to drag item into an empty folder

Improvements:
  - More responsive dragging

## 1.0.3.2903 (29/3/2013)
Improvements:
  - Dragging improvement

Translations:
  - Locales update: Simplified Chinese

## 1.0.2.2803 (28/3/2013)
Bugfixes:
  - Right click menu error(again)
  - Url can't be shown when editing bookmarks
  - Invalid input is not checked on Options page

Improvements:
  - Reduce startup time

Translations:
  - Support Traditional and Simplified Chinese locales

## 1.0.1.2703 (27/3/2013)
Bugfixes:
  - Right click menu error

Improvements:
  - Dragging improvement
  - UI improvement

## 1.0.0.2603 (26/3/2013)
- initial version
