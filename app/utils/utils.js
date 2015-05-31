System.register([], function(exports_1) {
    var testUrl;
    function ajax(url, options) {
        if (options === void 0) { options = {}; }
        return new Promise(function (resolve, reject) {
            var xhr = new XMLHttpRequest();
            function fail() {
                if (/application\/json/.test(xhr.getResponseHeader('Content-Type'))) {
                    reject(JSON.parse(xhr.responseText));
                }
                else {
                    reject(xhr.responseText);
                }
            }
            function ok() {
                if (/application\/json/.test(xhr.getResponseHeader('Content-Type'))) {
                    resolve(JSON.parse(xhr.responseText));
                }
                else {
                    resolve(xhr.responseText);
                }
            }
            xhr.addEventListener('abort', fail);
            xhr.addEventListener('error', fail);
            xhr.addEventListener('timeout', fail);
            xhr.addEventListener('load', ok);
            if (options.onprogress)
                xhr.addEventListener('progress', options.onprogress);
            xhr.open(options.method || 'GET', url, true, options.username || null, options.password || null);
            xhr.send(options.data || null);
        });
    }
    exports_1("ajax", ajax);
    function randomString() {
        return (Math.random() * Math.pow(10, 16)).toString(36);
    }
    exports_1("randomString", randomString);
    return {
        setters:[],
        execute: function() {
            exports_1("testUrl", testUrl = 'https://incandescent-torch-3438.firebaseio.com/test.json');
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInV0aWxzL3V0aWxzLnRzIl0sIm5hbWVzIjpbImFqYXgiLCJhamF4LmZhaWwiLCJhamF4Lm9rIiwicmFuZG9tU3RyaW5nIl0sIm1hcHBpbmdzIjoiO1FBQWEsT0FBTztJQUVwQixjQUFxQixHQUFXLEVBQUUsT0FBaUI7UUFBakJBLHVCQUFpQkEsR0FBakJBLFlBQWlCQTtRQUNqREEsTUFBTUEsQ0FBQ0EsSUFBSUEsT0FBT0EsQ0FBQ0EsVUFBQ0EsT0FBT0EsRUFBRUEsTUFBTUE7WUFDakNBLElBQUlBLEdBQUdBLEdBQUdBLElBQUlBLGNBQWNBLEVBQUVBLENBQUNBO1lBRS9CQTtnQkFDRUMsRUFBRUEsQ0FBQ0EsQ0FBQ0EsbUJBQW1CQSxDQUFDQSxJQUFJQSxDQUFDQSxHQUFHQSxDQUFDQSxpQkFBaUJBLENBQUNBLGNBQWNBLENBQUNBLENBQUNBLENBQUNBLENBQUNBLENBQUNBO29CQUNwRUEsTUFBTUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsS0FBS0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsWUFBWUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7Z0JBQ3ZDQSxDQUFDQTtnQkFBQ0EsSUFBSUEsQ0FBQ0EsQ0FBQ0E7b0JBQ05BLE1BQU1BLENBQUNBLEdBQUdBLENBQUNBLFlBQVlBLENBQUNBLENBQUNBO2dCQUMzQkEsQ0FBQ0E7WUFDSEEsQ0FBQ0E7WUFFREQ7Z0JBQ0VFLEVBQUVBLENBQUNBLENBQUNBLG1CQUFtQkEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsR0FBR0EsQ0FBQ0EsaUJBQWlCQSxDQUFDQSxjQUFjQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQTtvQkFDcEVBLE9BQU9BLENBQUNBLElBQUlBLENBQUNBLEtBQUtBLENBQUNBLEdBQUdBLENBQUNBLFlBQVlBLENBQUNBLENBQUNBLENBQUNBO2dCQUN4Q0EsQ0FBQ0E7Z0JBQUNBLElBQUlBLENBQUNBLENBQUNBO29CQUNOQSxPQUFPQSxDQUFDQSxHQUFHQSxDQUFDQSxZQUFZQSxDQUFDQSxDQUFDQTtnQkFDNUJBLENBQUNBO1lBQ0hBLENBQUNBO1lBRURGLEdBQUdBLENBQUNBLGdCQUFnQkEsQ0FBQ0EsT0FBT0EsRUFBRUEsSUFBSUEsQ0FBQ0EsQ0FBQ0E7WUFDcENBLEdBQUdBLENBQUNBLGdCQUFnQkEsQ0FBQ0EsT0FBT0EsRUFBRUEsSUFBSUEsQ0FBQ0EsQ0FBQ0E7WUFDcENBLEdBQUdBLENBQUNBLGdCQUFnQkEsQ0FBQ0EsU0FBU0EsRUFBRUEsSUFBSUEsQ0FBQ0EsQ0FBQ0E7WUFDdENBLEdBQUdBLENBQUNBLGdCQUFnQkEsQ0FBQ0EsTUFBTUEsRUFBRUEsRUFBRUEsQ0FBQ0EsQ0FBQ0E7WUFFakNBLEVBQUVBLENBQUNBLENBQUNBLE9BQU9BLENBQUNBLFVBQVVBLENBQUNBO2dCQUFDQSxHQUFHQSxDQUFDQSxnQkFBZ0JBLENBQUNBLFVBQVVBLEVBQUVBLE9BQU9BLENBQUNBLFVBQVVBLENBQUNBLENBQUNBO1lBRTdFQSxHQUFHQSxDQUFDQSxJQUFJQSxDQUFDQSxPQUFPQSxDQUFDQSxNQUFNQSxJQUFJQSxLQUFLQSxFQUFFQSxHQUFHQSxFQUFFQSxJQUFJQSxFQUFFQSxPQUFPQSxDQUFDQSxRQUFRQSxJQUFJQSxJQUFJQSxFQUFFQSxPQUFPQSxDQUFDQSxRQUFRQSxJQUFJQSxJQUFJQSxDQUFDQSxDQUFDQTtZQUNqR0EsR0FBR0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsT0FBT0EsQ0FBQ0EsSUFBSUEsSUFBSUEsSUFBSUEsQ0FBQ0EsQ0FBQ0E7UUFDakNBLENBQUNBLENBQUNBLENBQUNBO0lBQ0xBLENBQUNBO0lBOUJELHVCQThCQyxDQUFBO0lBRUQ7UUFDRUcsTUFBTUEsQ0FBQ0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsTUFBTUEsRUFBRUEsR0FBR0EsSUFBSUEsQ0FBQ0EsR0FBR0EsQ0FBQ0EsRUFBRUEsRUFBRUEsRUFBRUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsUUFBUUEsQ0FBQ0EsRUFBRUEsQ0FBQ0EsQ0FBQ0E7SUFDekRBLENBQUNBO0lBRkQsdUNBRUMsQ0FBQTs7OztZQXBDWSxxQkFBQSxPQUFPLEdBQUcsMERBQTBELENBQUEsQ0FBQyIsImZpbGUiOiJ1dGlscy91dGlscy5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCB0ZXN0VXJsID0gJ2h0dHBzOi8vaW5jYW5kZXNjZW50LXRvcmNoLTM0MzguZmlyZWJhc2Vpby5jb20vdGVzdC5qc29uJztcblxuZXhwb3J0IGZ1bmN0aW9uIGFqYXgodXJsOiBzdHJpbmcsIG9wdGlvbnM6IGFueSA9IHt9KSB7XG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgbGV0IHhociA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuXG4gICAgZnVuY3Rpb24gZmFpbCgpIHtcbiAgICAgIGlmICgvYXBwbGljYXRpb25cXC9qc29uLy50ZXN0KHhoci5nZXRSZXNwb25zZUhlYWRlcignQ29udGVudC1UeXBlJykpKSB7XG4gICAgICAgIHJlamVjdChKU09OLnBhcnNlKHhoci5yZXNwb25zZVRleHQpKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJlamVjdCh4aHIucmVzcG9uc2VUZXh0KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBvaygpIHtcbiAgICAgIGlmICgvYXBwbGljYXRpb25cXC9qc29uLy50ZXN0KHhoci5nZXRSZXNwb25zZUhlYWRlcignQ29udGVudC1UeXBlJykpKSB7XG4gICAgICAgIHJlc29sdmUoSlNPTi5wYXJzZSh4aHIucmVzcG9uc2VUZXh0KSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXNvbHZlKHhoci5yZXNwb25zZVRleHQpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHhoci5hZGRFdmVudExpc3RlbmVyKCdhYm9ydCcsIGZhaWwpO1xuICAgIHhoci5hZGRFdmVudExpc3RlbmVyKCdlcnJvcicsIGZhaWwpO1xuICAgIHhoci5hZGRFdmVudExpc3RlbmVyKCd0aW1lb3V0JywgZmFpbCk7XG4gICAgeGhyLmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCBvayk7XG5cbiAgICBpZiAob3B0aW9ucy5vbnByb2dyZXNzKSB4aHIuYWRkRXZlbnRMaXN0ZW5lcigncHJvZ3Jlc3MnLCBvcHRpb25zLm9ucHJvZ3Jlc3MpO1xuXG4gICAgeGhyLm9wZW4ob3B0aW9ucy5tZXRob2QgfHwgJ0dFVCcsIHVybCwgdHJ1ZSwgb3B0aW9ucy51c2VybmFtZSB8fCBudWxsLCBvcHRpb25zLnBhc3N3b3JkIHx8IG51bGwpO1xuICAgIHhoci5zZW5kKG9wdGlvbnMuZGF0YSB8fCBudWxsKTtcbiAgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByYW5kb21TdHJpbmcoKTogc3RyaW5nIHtcbiAgcmV0dXJuIChNYXRoLnJhbmRvbSgpICogTWF0aC5wb3coMTAsIDE2KSkudG9TdHJpbmcoMzYpO1xufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9