var english_sentences = ["John ate an apple before afternoon", "before afternoon John ate an apple", "John before afternoon ate an apple",

				"some students like to study in the night", "at night some students like to study",

				"John and Mary went to church", "Mary and John went to church",

				"John went to church after eating",	"after eating John went to church", "John after eating went to church",

				"did he go to market", "he did go to market",

				"the woman who called my sister sells cosmetics", "the woman who sells cosmetics called my sister",
				"my sister who sells cosmetics called the woman", "my sister who called the woman sells cosmetics",

				"John goes to the library and studies", "John studies and goes to the library",

				"John ate an apple so did she", "she ate an apple so did John",

				"the teacher returned the book after she noticed the error", "the teacher noticed the error after she returned the book",
				"after the teacher returned the book she noticed the error", "after the teacher noticed the error she returned the book",
				"she returned the book after the teacher noticed the error", "she noticed the error after the teacher returned the book",
				"after she returned the book the teacher noticed the error", "after she noticed the error the teacher returned the book",

				"I told her that I bought a book yesterday", "I told her yesterday that I bought a book",
				"yesterday I told her that I bought a book", "I bought a book that I told her yesterday",
				"I bought a book yesterday that I told her", "yesterday I bought a book that I told her"
			]

var hindi_sentences = ["राम और श्याम बाजार गयें", "राम और श्याम गयें बाजार", "बाजार गयें राम और श्याम", "गयें बाजार राम और श्याम",

				"राम सोया और श्याम भी", "श्याम सोया और राम भी", "सोया श्याम और राम भी", "सोया राम और श्याम भी",

				"मैंने उसे बताया कि राम सो रहा है", "मैंने उसे बताया कि सो रहा है राम", "उसे मैंने बताया कि राम सो रहा है", "उसे मैंने बताया कि सो रहा है राम", 
				"मैंने बताया उसे कि राम सो रहा है", "मैंने बताया उसे कि सो रहा है राम", "उसे बताया मैंने कि राम सो रहा है", "उसे बताया मैंने कि सो रहा है राम",
				"बताया मैंने उसे कि राम सो रहा है", "बताया मैंने उसे कि सो रहा है राम", "बताया उसे मैंने कि राम सो रहा है", "बताया उसे मैंने कि सो रहा है राम",

				"राम खाकर सोया", "खाकर राम सोया", "राम सोया खाकर", "खाकर सोया राम", "सोया राम खाकर", "सोया खाकर राम",

				"बिल्लियों को मारकर कुत्ता सो गया", "मारकर बिल्लियों को कुत्ता सो गया", "बिल्लियों को मारकर सो गया कुत्ता", "मारकर बिल्लियों को सो गया कुत्ता",	
				"कुत्ता सो गया बिल्लियों को मारकर", "कुत्ता सो गया मारकर बिल्लियों को", "सो गया कुत्ता बिल्लियों को मारकर", "सो गया कुत्ता मारकर बिल्लियों को",

				"एक लाल किताब वहाँ है", "एक लाल किताब है वहाँ", "वहाँ है एक लाल किताब", "है वहाँ एक लाल किताब",

				"एक बड़ी सी किताब वहाँ है",	 "एक बड़ी सी किताब है वहाँ", "बड़ी सी एक किताब वहाँ है", "बड़ी सी एक किताब है वहाँ", "वहाँ है एक बड़ी सी किताब",
				"वहाँ है बड़ी सी एक किताब", "है वहाँ एक बड़ी सी किताब", "है वहाँ बड़ी सी एक किताब"
			]

var sentences = '{"English":['+
    '{"a":"John ate an apple before afternoon", "b":"before afternoon John ate an apple", "c":"John before afternoon ate an apple"},' +
    '{"a":"some students like to study in the night", "b":"in the night some students like to study"},' +
    '{"a":"John and Mary went to church", "b":"Mary and John went to church"},'+
    '{"a":"John went to church after eating", "b":"after eating John went to church","c":"John after eating went to church"},' +
    '{"a":"did he go to market", "b":"he did go to market"},' +
    '{"a":"the woman who called my sister sells cosmetics", "b":"the woman who sells cosmetics called my sister",'+
        '"c":"my sister who sells cosmetics called the woman", "d":"my sister who called the woman sells cosmetics"},'+
    '{"a":"John goes to the library and studies", "b":"John studies and goes to the library"},'+
    '{"a":"John ate an apple so did she", "b":"she ate an apple so did John"},'+
    '{"a":"the teacher returned the book after she noticed the error", "b":"the teacher noticed the error after she returned the book",'+
        '"c":"after the teacher returned the book she noticed the error", "d":"after the teacher noticed the error she returned the book",'+
        '"e":"she returned the book after the teacher noticed the error", "f":"she noticed the error after the teacher returned the book",'+
        '"g":"after she returned the book the teacher noticed the error", "h":"after she noticed the error the teacher returned the book"},'+
    '{"a":"I told her that I bought a book yesterday", "b":"I told her yesterday that I bought a book", "c":"yesterday I told her that I bought a book",'+
        '"d":"I bought a book that I told her yesterday", "e":"I bought a book yesterday that I told her", "f":"yesterday I bought a book that I told her"}],'+
    
    '"Hindi":[' +
    '{"a":"राम और श्याम बाजार गयें", "b":"राम और श्याम गयें बाजार", "c":"बाजार गयें राम और श्याम", "d":"गयें बाजार राम और श्याम"},'+
    '{"a":"राम सोया और श्याम भी", "b":"श्याम सोया और राम भी", "c":"सोया श्याम और राम भी", "d":"सोया राम और श्याम भी"},'+
    '{"a":"मैंने उसे बताया कि राम सो रहा है", "b":"मैंने उसे बताया कि सो रहा है राम", "c":"उसे मैंने बताया कि राम सो रहा है", "d":"उसे मैंने बताया कि सो रहा है राम",'+
        '"e":"मैंने बताया उसे कि राम सो रहा है", "f":"मैंने बताया उसे कि सो रहा है राम", "g":"उसे बताया मैंने कि राम सो रहा है", "h":"उसे बताया मैंने कि सो रहा है राम",'+
        '"i":"बताया मैंने उसे कि राम सो रहा है", "j":"बताया मैंने उसे कि सो रहा है राम", "k":"बताया उसे मैंने कि राम सो रहा है", "l":"बताया उसे मैंने कि सो रहा है राम"},'+
    '{"a":"राम खाकर सोया", "b":"खाकर राम सोया", "c":"राम सोया खाकर", "d":"खाकर सोया राम", "e":"सोया राम खाकर", "f":"सोया खाकर राम"},'+
    '{"a":"बिल्लियों को मारकर कुत्ता सो गया", "b":"मारकर बिल्लियों को कुत्ता सो गया", "c":"बिल्लियों को मारकर सो गया कुत्ता", "d":"मारकर बिल्लियों को सो गया कुत्ता",'+
        '"e":"कुत्ता सो गया बिल्लियों को मारकर", "f":"कुत्ता सो गया मारकर बिल्लियों को", "g":"सो गया कुत्ता बिल्लियों को मारकर", "h":"सो गया कुत्ता मारकर बिल्लियों को"},'+
    '{"a":"एक लाल किताब वहाँ है", "b":"एक लाल किताब है वहाँ", "c":"वहाँ है एक लाल किताब", "d":"है वहाँ एक लाल किताब"},'+
    '{"a":"एक बड़ी सी किताब वहाँ है", "b":"एक बड़ी सी किताब है वहाँ", "c":"बड़ी सी एक किताब वहाँ है", "d":"बड़ी सी एक किताब है वहाँ", "e":"वहाँ है एक बड़ी सी किताब",'+
        '"f":"वहाँ है बड़ी सी एक किताब", "g":"है वहाँ एक बड़ी सी किताब", "h":"है वहाँ बड़ी सी एक किताब"}]}';

var sentences = JSON.parse(sentences);

var selected_language;
/* Printing the initial message */
function initial_message(){

	clear()
	var selected_language = document.getElementById("selectLang").value;
	if(selected_language == "English"){
		document.getElementById("initial-msg-1").innerHTML = "Form a sentence (Declarative or Interrogative or any other type) from the given words";
		document.getElementById("initial-msg-2").innerHTML = "(select the buttons in proper order)";
		sentence_randomize(english_sentences);
	}

	else if(selected_language == "Hindi"){
		document.getElementById("initial-msg-1").innerHTML = "Form a sentence (Declarative or Interrogative or any other type) from the given words";
		document.getElementById("initial-msg-2").innerHTML = "(select the buttons in proper order)";
		sentence_randomize(hindi_sentences);
	}

	else{
		alert("Select Language");
		select_display("none");
	}
}

/* Selecting a random sentence */
function sentence_randomize(array){

	document.getElementById('word-buttons').innerHTML = "";

	var random_number = Math.floor(Math.random() * (array.length));
	selected_sentence = array[random_number];
	word_randomize(selected_sentence);
}

/* Split the sentence into an array, shuffle the words and create buttons*/
function word_randomize(sentence){
	word_array = sentence.split(" ");
	randomized_word_array = shuffle_words(word_array);
	create_buttons(randomized_word_array);
}

/* Shuffling of words */
function shuffle_words(array){
	var word_array_len = array.length;
	var temp;

	while (word_array_len > 0){
		idx = Math.floor(Math.random() * word_array_len);
		word_array_len--;

		temp = array[word_array_len];
        array[word_array_len] = array[idx];
        array[idx] = temp;
	}
	return array;
}

/* Create buttons of the shuffled words */
function create_buttons(array){

	var j = "1";
    for(i = 0; i < array.length; i++){
        var button = document.createElement("button");
        button.setAttribute("id", j);
        button.setAttribute("value",array[i]);
        j += String(parseFloat(j) + 1);
        button.innerHTML = array[i];
        document.getElementById('word-buttons').appendChild(button);
        
    }
    document.getElementById('formed-sentence').value = String();
    word_btn_count = 0;
}

/* Display a new message */
function new_message(target_id){
    if(target_id == "word-buttons")
        return ;
    document.getElementById('new-msg').innerHTML = "Formed Sentence";
    document.getElementById('new-line').innerHTML = "(after selecting words):";
    document.getElementById("reform-button").style.display = "initial";
}

/* Display the created buttons, onclick of any button display its respective text and button disappears */
function display_created_btns(target_id){
    if(target_id == "word-buttons")
        return ;
    if(word_btn_count == 0){
        document.getElementById('formed-sentence').innerHTML = String(document.getElementById(target_id).value);
    }
    else{
        document.getElementById('formed-sentence').innerHTML = String(document.getElementById('formed-sentence').innerHTML) + " " + String(document.getElementById(target_id).value);
    }
    formed_sentence = document.getElementById('formed-sentence').innerHTML;
    document.getElementById(target_id).style.display = "none";

    word_btn_count += 1;

    if(word_btn_count == word_array.length){
        document.getElementById("check-correctness-sentence").style.display = "initial";
    }
}

/* Reforming a sentence */
function reform_sentence(){
    clear();
    document.getElementById('word-buttons').innerHTML = "";
    create_buttons(word_array);
}

/* Check the correctness of the sentence */
function check_correctness_sentence(){
	var selected_language = document.getElementById("selectLang").value;
    var status = false;
    if(selected_language == "English"){
        for(s in sentences.English[Math.floor(Math.random() * 10)]){
            if(sentences.English[Math.floor(Math.random() * 10)][s] == formed_sentence){
                status = true;
                break;
            }
        }

        if(status == true){
            document.getElementById('correct-answer').style.display = "initial";
        }
        else{
            document.getElementById('wrong-answer').style.display = "initial";
            document.getElementById('correct-sentence').style.display = "initial";         
        }
        return;
    }
    else if(selected_language == "Hindi"){
        for(s in sentences.Hindi[Math.floor(Math.random() * 7)]){
            if(sentences.Hindi[Math.floor(Math.random() * 7)][s] == formed_sentence){
                status = true;
                break;
            }
        }

        if(status == true){
            document.getElementById('correct-answer').style.display = "initial";
        }
        else{
            document.getElementById('wrong-answer').style.display = "initial";
            document.getElementById('correct-sentence').style.display = "initial";          
        }
        return true;
    }
    
    
}

function get_correct_sentences(){
	var selected_language = document.getElementById("selectLang").value;
    document.getElementById('correct-sentences').style.display = "initial";

    var value = document.getElementById('correct-sentence').innerHTML;

    if(value == "Get the correct sentence" || value == "Get answers"){                            
        document.getElementById('correct-sentence').innerHTML = "Hide the correct sentence";

        if(selected_language == "English"){
            for(s in sentences.English[Math.floor(Math.random() * 10)]){
                var txt = document.createTextNode(sentences.English[Math.floor(Math.random() * 10)][s]);
                document.getElementById('correct-sentences').appendChild(txt);
                var new_line = document.createElement("br");
                document.getElementById('correct-sentences').appendChild(new_line);
            }
            return;
        }
        else if(selected_language == "Hindi"){
            for(s in sentences.Hindi[Math.floor(Math.random() * 7)]){
                var txt = document.createTextNode(sentences.Hindi[Math.floor(Math.random() * 7)][s]);
                document.getElementById('correct-sentences').appendChild(txt);
                var new_line = document.createElement("br");
                document.getElementById('correct-sentences').appendChild(new_line);
            }
            return;
        }
    }
    else if(value == "Hide the correct sentence"){
        document.getElementById('correct-sentence').innerHTML = "Get answers";
        document.getElementById('correct-sentences').innerHTML = "";
    }
}

function clear(){
	document.getElementById("new-msg").innerHTML = "";
    document.getElementById("new-line").innerHTML = "";
    document.getElementById('formed-sentence').innerHTML = "";
    document.getElementById("reform-button").style.display = "none";
    document.getElementById("check-correctness-sentence").style.display = "none";
    document.getElementById('correct-answer').style.display = "none";
    document.getElementById('wrong-answer').style.display = "none";
    document.getElementById('correct-sentence').style.display = "none";
    document.getElementById('correct-sentences').style.display = "none";
    document.getElementById('correct-sentence').innerHTML = "Get the correct sentence";
    document.getElementById('correct-sentences').innerHTML = "";
}

function select_display(val){
    document.getElementById("word-buttons").style.display = val;
    document.getElementById("new-msg").style.display = val;
    document.getElementById("new-line").style.display = val;
}