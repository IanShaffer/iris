var audio = new Audio();
var chosenLanguage = "english";
var languages = {
    english: {
        modelId: undefined,
        voice: "en-US_AllisonVoice"
    },
    spanish: {
        modelId: "en-es-conversational",
        voice: "es-ES_LauraVoice"
    },
    french: {
        modelId: "en-fr-conversational",
        voice: "fr-FR_ReneeVoice"
    },
    portuguese: {
        modelId: "en-pt-conversational",
        voice: "pt-BR_IsabelaVoice"
    },
    german: {
        modelId: "en-de",
        voice: "de-DE_BirgitVoice"
    },
    italian: {
        modelId: "en-it",
        voice: "it-IT_FrancescaVoice"
    },
    japanese: {
        modelId: "en-ja",
        voice: "ja-JP_EmiVoice"
    }
};

<<<<<<< HEAD
<<<<<<< HEAD
//helper function to retrieve binary data when making ajax call. 
=======
var elementsArray = document.getElementsByTagName('*');
for (var i = 0; i < elementsArray.length; i++) {
    elementsArray[i].addEventListener("focus", function () {
        var englishText = this.innerHTML
        chrome.storage.sync.get('language', function (items) {
            chosenLanguage = items.language;
            // if English
            if (!languages[chosenLanguage].modelId) {
                textToSpeechAjax(englishText, function (response) {
                    var blob = new Blob([response], { "type": "audio/wav" });
                    var objectUrl = window.URL.createObjectURL(blob);
                    audio.src = objectUrl;
                    audio.play();
                });
            // if not English
            } else {
                translateAjax(englishText, function (response) {
                    var spanishText = response.translations[0].translation;
                    textToSpeechAjax(spanishText, function (response) {
                        var blob = new Blob([response], { "type": "audio/wav" });
                        var objectUrl = window.URL.createObjectURL(blob);
                        audio.src = objectUrl;
                        audio.play();
                    });
                });
            }
        });
    });
    elementsArray[i].addEventListener("mouseenter", function (e) {
        var element = e.target;
        var value = ""; 
        //console.log(element.nodeName);
        switch(element.nodeName)
        {
            case "INPUT":
                value = element.value;
                value += " " + element.getAttribute;
                break;
            default:
                value = element.innerText;
                console.log(element.nodeName);
                value += " " + element.nodeName;
            
        }
       // console.log($(value));var stringOfHtml = "<p></p><script>alert('fail');</scr" + "ipt><span></span>";
        console.log(value); 
        // crap
        chrome.storage.sync.get('language', function (items) {
            chosenLanguage = items.language;
            // if English
            if (!languages[chosenLanguage].modelId) {
                textToSpeechAjax(value, function (response) {
                    var blob = new Blob([response], { "type": "audio/wav" });
                    var objectUrl = window.URL.createObjectURL(blob);
                    audio.src = objectUrl;
                    audio.play();
                });
                // if not English
            } else {
                translateAjax(value, function (response) {
                    var spanishText = response.translations[0].translation;
                    textToSpeechAjax(spanishText, function (response) {
                        var blob = new Blob([response], { "type": "audio/wav" });
                        var objectUrl = window.URL.createObjectURL(blob);
                        audio.src = objectUrl;
                        audio.play();
                    });
                });
            }
        });
        // crap
    });

}

>>>>>>> origin/master
=======
>>>>>>> a3dcd854a3c45c2c406e5b526756260d55d08705
$.ajaxTransport("+binary", function (options, originalOptions, jqXHR) {
    // check for conditions and support for blob / arraybuffer response type
    if (window.FormData && ((options.dataType && (options.dataType == 'binary')) || (options.data && ((window.ArrayBuffer && options.data instanceof ArrayBuffer) || (window.Blob && options.data instanceof Blob))))) {
        return {
            // create new XMLHttpRequest
            send: function (headers, callback) {
                // setup all variables
                var xhr = new XMLHttpRequest(),
                    url = options.url,
                    type = options.type,
                    async = options.async || true,
                    // blob or arraybuffer. Default is blob
                    dataType = options.responseType || "blob",
                    data = options.data || null,
                    username = options.username || null,
                    password = options.password || null;

                xhr.addEventListener('load', function () {
                    var data = {};
                    data[options.dataType] = xhr.response;
                    // make callback and send data
                    callback(xhr.status, xhr.statusText, data, xhr.getAllResponseHeaders());
                });

                xhr.open(type, url, async, username, password);

                // setup custom headers
                for (var i in headers) {
                    xhr.setRequestHeader(i, headers[i]);
                }

                xhr.responseType = dataType;
                xhr.send(data);
            },
            abort: function () {
                jqXHR.abort();
            }
        };
    }
});


var elementsArray = document.getElementsByTagName('*');
for (var i = 0; i < elementsArray.length; i++) {
    elementsArray[i].addEventListener("focus", function () {
        var englishText = this.innerHTML
        chrome.storage.sync.get('language', function (items) {
            chosenLanguage = items.language;
            // if English
            if (!languages[chosenLanguage].modelId) {
                playBlob(englishText);
            // if not English
            } else {
                translateAjax(englishText, function (response) {
                    var spanishText = response.translations[0].translation;
                    playBlob(spanishText); 
                });
            }
        });
    });
    elementsArray[i].addEventListener("mouseenter", function (e) {
        var element = e.target;
        var value = ""; 
        console.log(element); 
        switch(element.nodeName)
        {
            case "INPUT":
                value = element.value;
                value += " button";
                break;  
            case "DIV":
                value = "";
                break;  
            case "A":
                value = element.innerText;
                value += " link";
                break;  
            case "H1","H2","H3","H4":
                value = element.innerText;
                value += " title";
                break;    
            case "IMG":
                value = element.innerText;
                value += " Image " + element.alt;
                break;  
            default: 
                value = element.innerText;  
        }
        console.log(value);   
          
        chrome.storage.sync.get('language', function (items) {
            chosenLanguage = items.language;
            // if English
            if (!languages[chosenLanguage].modelId) {
                playBlob(value);
            // if not English
            } else {
                translateAjax(value, function (response) {
                    var spanishText = response.translations[0].translation;
                    playBlob(spanishText); 
                });
            }
        });
    });

}
        if(value !== "") 
            playBlob(value); 
    });

}

function playBlob(text) 
{
    textToSpeechAjax(text, function (response) {
        var blob = new Blob([response], { "type": "audio/wav" });
        var objectUrl = window.URL.createObjectURL(blob);
        audio.src = objectUrl;
        var isPlaying = audio.currentTime > 0 && !audio.paused && !audio.ended && audio.readyState > 2;
        if(!isPlaying) 
            audio.play();
    });
}



function textToSpeechAjax(text, callback) {
    var url = "https://stream.watsonplatform.net/text-to-speech/api/v1/synthesize?accept=audio/wav&voice=" + languages[chosenLanguage].voice;
    $.ajax({
        url: url,
        method: "GET",
        headers: {
            "Authorization": "Basic YzM4Mzk3Y2QtZTE5YS00M2FlLWJmNDEtMzc3YjRlMjc2NGIzOkFwNkpsN3daS1FFRA==",
            "output": "speech.wav"
        },
        data: {
            text: text
        },
        dataType: "binary",
        responseType: "arraybuffer"
    }).then(function (response) {
        callback(response);
    });
};

function translateAjax(text, callback) {
    var url = "https://gateway.watsonplatform.net/language-translator/api/v2/translate";
    $.ajax({
        url: url,
        method: "GET",
        headers: {
            "Authorization": "Basic MGNhNTJjNjgtNThiNS00NjI1LTk5ZWUtM2E2N2FjN2FlMDFjOlhMVWZTbDM0aUxrdg==",
            "Accept": "application/json"
        },
        data: {
            text: text,
            model_id: languages[chosenLanguage].modelId
        }
    }).then(function (response) {
        callback(response);
    });
};

function getLanguagesAjax(callback) {
    var url = "https://gateway.watsonplatform.net/language-translator/api/v2/identifiable_languages"
    $.ajax({
        url: url,
        method: "GET",
        headers: {
            "Authorization": "Basic MGNhNTJjNjgtNThiNS00NjI1LTk5ZWUtM2E2N2FjN2FlMDFjOlhMVWZTbDM0aUxrdg=="
        }
    }).then(function (response) {
        callback(response.languages);
    });
};

function getLanguageModelsAjax(callback) {
    var url = "https://gateway.watsonplatform.net/language-translator/api/v2/models"
    $.ajax({
        url: url,
        method: "GET",
        headers: {
            "Authorization": "Basic MGNhNTJjNjgtNThiNS00NjI1LTk5ZWUtM2E2N2FjN2FlMDFjOlhMVWZTbDM0aUxrdg=="
        }
    }).then(function (response) {
        callback(response.models);
    });
};

function detectLanguageAjax(text, callback) {
    var url = "https://gateway.watsonplatform.net/language-translator/api/v2/identify"
    $.ajax({
        url: url,
        method: "POST",
        headers: {
            "Authorization": "Basic MGNhNTJjNjgtNThiNS00NjI1LTk5ZWUtM2E2N2FjN2FlMDFjOlhMVWZTbDM0aUxrdg==",
            "Content-Type": "text/plain"
        },
        data: text
    }).then(function (languageBestGuess) {
        callback(languageBestGuess);
    });
};
