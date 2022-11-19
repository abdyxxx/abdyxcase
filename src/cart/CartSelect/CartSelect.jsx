import { MenuItem, Select } from '@mui/material'
import React from 'react'

export default function CartSelect() {
    return (
        <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={14}
            label="Age"
            onChange={null}
        >
            <MenuItem value={6}>IPhone 6</MenuItem>
            <MenuItem value={61}>IPhone 6 Plus</MenuItem>
            <MenuItem value={62}>IPhone 6S</MenuItem>
            <MenuItem value={63}>IPhone 6S</MenuItem>
            <MenuItem value={64}>Iphone SE 2016</MenuItem>
            <MenuItem value={7}>IPhone 7</MenuItem>
            <MenuItem value={71}>IPhone 7 Plus</MenuItem>
            <MenuItem value={8}>IPhone 8</MenuItem>
            <MenuItem value={81}>IPhone 8 Plus</MenuItem>
            <MenuItem value={9}>IPhone X</MenuItem>
            <MenuItem value={10}>IPhone XS</MenuItem>
            <MenuItem value={101}>IPhone XS Max</MenuItem>
            <MenuItem value={102}>IPhone XR</MenuItem>
            <MenuItem value={11}>IPhone 11</MenuItem>
            <MenuItem value={111}>IPhone 11 Pro</MenuItem>
            <MenuItem value={112}>IPhone 11 Pro Max</MenuItem>
            <MenuItem value={12}>IPhone 12</MenuItem>
            <MenuItem value={121}>IPhone 12 Pro</MenuItem>
            <MenuItem value={122}>IPhone 12 Pro Max</MenuItem>
            <MenuItem value={13}>IPhone 13</MenuItem>
            <MenuItem value={131}>IPhone 13 Pro</MenuItem>
            <MenuItem value={132}>IPhone 13 Pro Max</MenuItem>
            <MenuItem value={14}>IPhone 14</MenuItem>
            <MenuItem value={141}>IPhone 14 Pro</MenuItem>
            <MenuItem value={142}>IPhone 14 Pro Max</MenuItem>
        </Select>
    )
}
