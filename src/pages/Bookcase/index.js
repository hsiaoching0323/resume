import React,{Component} from 'react'
import BookLists from '../../components/BookLists'
import booksData from '../books.json'

export default () =>{
    return <div>
            <BookLists dataSource = {booksData.data} />
        </div>
}