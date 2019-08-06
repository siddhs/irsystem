import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import style from '../assets/css/SearchResultComponent.css'




class SearchResultComponent extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            results: this.props.location.state.data.results
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }


    render() {
        const resultsList = this.state.results.map((item, index) => {
            return (
                <div key={index}>
                    <Card>
                        <CardContent>
                            <span ><b><u>Result {index+1}: {item.personName}</u></b></span>
                            <Typography>
                                <span className={"paragraph"} style={style}>{item.text}</span>
                            </Typography>
                            <br/>
                            <form onSubmit={this.handleSubmit}>

                                <Typography>
                                    Please answer following questions for <label name="personName" id={"personName"} defaultValue={item.personName}>{item.personName}</label>
                                </Typography>

                                <Typography>
                                    Q1. Subject of Biography
                                </Typography>
                                <textarea name={"subjectOfBiography"} id={"subjectOfBiography"} cols={40} rows={2}></textarea>
                                <br/>

                                <Typography>
                                    Q2. Date and Place of Birth
                                </Typography>
                                <textarea name={"dateAndBirthPlace"} id={"Datebirthplace"} cols={40} rows={2}></textarea>
                                <br/>

                                <Typography>
                                    Q3. Early life and Education
                                </Typography>
                                <textarea name={"earlyLifeAndEducation"} id={"earlyLifeAndEducation"} rows={5} cols={200}></textarea>
                                <br/>
                                <Typography>
                                    Q4. Career
                                </Typography>
                                <textarea name={"Career"} id={"Career"} rows={5} cols={200}></textarea>
                                <br/>
                                <Typography>
                                    Q5. Family and Children
                                </Typography>
                                <textarea name={"familyAndChildren"} id={"familyAndChildren"} rows={5} cols={200}></textarea>
                                <br/>
                                <Typography>
                                    Q6. Major Accomplishments
                                </Typography>
                                <textarea name={"majorAccomplishments"} id={"majorAccomplishments"} rows={5} cols={200}></textarea>
                                <br/>
                                <Typography>
                                    Q7. How the subject changed the world
                                </Typography>
                                <textarea name={"worldChange"} id={"worldChange"} rows={10} cols={200}></textarea>
                                <br/>
                                <Typography>
                                    Q7. Enter your full name
                                </Typography>
                                <textarea name={"userName"} id={"userName"} rows={2} cols={50}></textarea>
                                <br/>
                                <button className={"formSubmitButton"} style={style}>Save data!</button>
                            </form>
                        </CardContent>
                    </Card>
                    <br/>
                    <br/>
                </div>
            )
        });

        return(
            <div>
                <h1>Search result for {this.props.location.state.data.keyword} retuned {this.state.results.length} results</h1>
                {resultsList}
            </div>

        )
    }

    handleSubmit(event) {
        event.preventDefault();
        const data = new FormData(event.target);
        fetch('http://localhost:8080/saveannotations', {
            mode: 'cors',
            headers: {
                'Access-Control-Allow-Origin':'*'
            },
            method: 'POST',
            body: data
        }).then(response => {
            return response.json()})
            .then(data => {if (data == "200"){
                alert("The response has been saved Successfully!!")
            } })
    }

}

export default SearchResultComponent;