import React, {useState} from 'react';
import {
    View, Text, StyleSheet, ScrollView, TextInput, TouchableOpacity, KeyboardAvoidingView
} from "react-native"
import { useDispatch, useSelector } from 'react-redux';
import { addBook, removeBook } from '../Actions';

const Books = () => {
    const dispatch = useDispatch()
    const { books } = useSelector(({bookReducer}) => ({
        books: bookReducer.books
    }))

    const [bookInput, setBookInput] = useState({ title: "", author: "" })

    return (
        <KeyboardAvoidingView style={Styles.container} behavior={Platform.OS == "ios" ? "padding" : ""}>
            <Text style={Styles.title}>Books</Text>
            <ScrollView
                keyboardShouldPersistTaps="always"
                style={Styles.booksContainer}>
                {
                    books.map((book, index) => (
                        <View style={Styles.book} key={index}>
                            <Text style={Styles.name}>{book.name}</Text>
                            <Text style={Styles.author}>{book.author}</Text>
                            <Text onPress={() => dispatch(removeBook(book))}>삭제</Text>
                        </View>
                    ))
                }
            </ScrollView>

            <View style={Styles.inputContainer}>
                <View style={Styles.inputWrapper}>
                    <TextInput
                        value={bookInput.title}
                        onChangeText={(text) => setBookInput({...bookInput, title: text})}
                        style={Styles.input}
                        placeholder="책 이름" />
                    <TextInput
                        value={bookInput.author}
                        onChangeText={(text) => setBookInput({...bookInput, author: text})}
                        style={Styles.input}
                        placeholder="저자 이름" />
                </View>
                <TouchableOpacity onPress={() => dispatch(addBook({ name: bookInput.title, author: bookInput.author }))}>
                    <View style={Styles.addButtonContainer}>
                        <Text style={Styles.addButton}>+</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
    );
};

const Styles = StyleSheet.create({
    container: {
        flex: 1
    },
    booksContainer: {
        borderTopWidth: 1,
        borderTopColor: "#ddd",
        flex: 1
    },
    title: {
        paddingTop: 30,
        paddingBottom: 20,
        fontSize: 20,
        textAlign: "center"
    },
    book: {
        padding: 20
    },
    name: {
        fontSize: 18
    },
    author: {
        fontSize: 14,
        color: "#999"
    },
    inputContainer: {
        padding: 10,
        backgroundColor: "#ffffff",
        borderTopColor: "#ededed",
        borderTopWidth: 1,
        flexDirection: "row",
        height: 100
    },
    inputWrapper: {
        flex: 1
    },
    input: {
        height: 44,
        padding: 7,
        backgroundColor: "#ededed",
        borderColor: "#ddd",
        borderWidth: 1,
        borderRadius: 10,
        flex: 1,
        marginBottom: 5
    },
    addButton: {
        fontSize: 28,
        lineHeight: 28
    },
    addButtonContainer: {
        width: 80,
        height: 80,
        backgroundColor: "#ededed",
        marginLeft: 10,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 20
    }
})

export default Books;