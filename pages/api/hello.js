import randomstring from 'randomstring'

export default (req, res) => {
    res.status(200).json({ data: randomstring.generate() })
}