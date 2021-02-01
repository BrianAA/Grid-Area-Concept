import React from 'react'
import Styled from 'styled-components';

const Grid=Styled.section`
    margin:0 auto;
    display:grid;
    grid-template-rows: auto;
    column-gap: 32px;
    grid-template-columns: 1fr ${props => getColumns(props.colMax)} 1fr;
    grid-template-areas:${props => setAreas(props.areasMax)};

    @media only screen and (max-width: 1399px) {
        grid-template-columns: 1fr ${props => getColumns(props.colLg)} 1fr;
        grid-template-areas:${props => setAreas(props.areasLg)};
    }

    @media only screen and (max-width: 1149px) {
        grid-template-columns: 1fr ${props => getColumns(props.colMed)} 1fr;
        grid-template-areas:${props => setAreas(props.areasMed)};
    }

    @media only screen and (max-width: 899px) {
        grid-template-columns: 1fr ${props => getColumns(props.colSm)} 1fr;
        grid-template-areas:${props => setAreas(props.areasSm)};
    }

    @media only screen and (max-width: 767px) {
        grid-template-columns: 16px 1fr 16px;
        column-gap: 0px;
        grid-template-areas:"";
    }
`;

function getColumns(columns){
    let widthsOfColumns="";
    columns.forEach(col => {
        let width=col*34;
        let gaps=(col-1)*32;
        let total=(width+gaps)+'px';
        widthsOfColumns=widthsOfColumns+" "+(total);
    });
    return widthsOfColumns.toString();
}

function setAreas(areas){
    let areaTemplate="";
    areas.forEach(template => {
        areaTemplate=areaTemplate+`"`+template+`"`;
    });
    return areaTemplate;
}

export default function grid(props) {
    return (
        <Grid 
        id={props.id}
        //columns at each break point
        colMax={props.colMax} 
        colLg={props.colLg} 
        colMed={props.colMed}
        colSm={props.colSm}

        // Defines areas at each break point
        areasMax={props.areasMax}
        areasLg={props.areasLg}
        areasMed={props.areasMed}
        areasSm={props.areasSm}
        >
            {props.children}
        </Grid>
    )
}
