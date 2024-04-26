System.register("chunks:///_virtual/cn.ts",["cc"],(function(n){var e;return{setters:[function(n){e=n.cclegacy}],execute:function(){e._RF.push({},"1ba2dPlUsZPML43TQhxDpvS","cn",void 0);var a=window,c=n("languages",{test:{main:"状态"}});a.languages||(a.languages={}),a.languages.cn=c,e._RF.pop()}}}));

System.register("chunks:///_virtual/en.ts",["cc"],(function(e){var n;return{setters:[function(e){n=e.cclegacy}],execute:function(){n._RF.push({},"c35fendND9GWpXORI/S+oe8","en",void 0);var t=window,a=e("languages",{test:{main:"state"}});t.languages||(t.languages={}),t.languages.en=a,n._RF.pop()}}}));

System.register("chunks:///_virtual/jp.ts",["cc"],(function(a){var e;return{setters:[function(a){e=a.cclegacy}],execute:function(){e._RF.push({},"6ddaaKBzNJF9pLv4DSM/xQG","jp",void 0);var n=window,t=a("languages",{test:{main:"テストします"}});n.languages||(n.languages={}),n.languages.jp=t,e._RF.pop()}}}));

System.register("chunks:///_virtual/resources",["./cn.ts","./en.ts","./jp.ts"],(function(){return{setters:[null,null,null],execute:function(){}}}));

(function(r) {
  r('virtual:///prerequisite-imports/resources', 'chunks:///_virtual/resources'); 
})(function(mid, cid) {
    System.register(mid, [cid], function (_export, _context) {
    return {
        setters: [function(_m) {
            var _exportObj = {};

            for (var _key in _m) {
              if (_key !== "default" && _key !== "__esModule") _exportObj[_key] = _m[_key];
            }
      
            _export(_exportObj);
        }],
        execute: function () { }
    };
    });
});