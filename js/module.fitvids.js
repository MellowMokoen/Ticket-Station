export default function(e){const s=SEMICOLON.Core;s.loadJS({file:"plugins.fitvids.js",id:"canvas-fitvids-js",jsFolder:!0}),s.isFuncTrue(()=>jQuery().fitVids).then(i=>!!i&&(s.initFunction({class:"has-plugin-fitvids",event:"pluginFitVidsReady"}),(e=s.getSelector(e)).length<1||void e.parent().fitVids({customSelector:'iframe[src*="youtube"],iframe[src*="vimeo"],iframe[src*="dailymotion"],iframe[src*="maps.google.com"],iframe[src*="google.com/maps"]',ignore:".no-fv"})))}