# No Vicinae Animation

A KDE KWin scripted effect that suppresses open and close animations for Vicinae windows while leaving animation behavior for other applications unchanged.

Install for the current user:

```bash
kpackagetool6 --type KWin/Effect --install .
kwriteconfig6 --file kwinrc --group Plugins --key no-vicinae-animationEnabled true
qdbus6 org.kde.KWin /KWin reconfigure
```
