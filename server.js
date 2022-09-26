const path = require('path')
const express = require('express')
const { engine } = require('express-handlebars')
const validUrl = require('valid-url')
const Url = require('./models/Url')

// express server
const app = express()

// templating engine
app.engine('handlebars', engine({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

// serving static files
app.use(express.static(path.join(__dirname, 'public')))

// body parser middleware
// app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// index
app.get('/', (req, res) => res.render('index'))

// long url submission
app.post('/', async (req, res) => {
    const { url: longUrl } = req.body
    if (!validUrl.isUri(longUrl))
        res.status(400).render('error', {
            layout: 'sub',
            status: 400,
            info: 'Bad Request: Invalid URL',
        })
    else {
        try {
            const [urlEntry, created] = await Url.findOrCreate({
                where: { target: longUrl },
            })

            if (created)
                console.log(
                    `Created new url record with id of ${urlEntry.id} on ${urlEntry.createdAt} ✔️`
                )
            else
                console.log(
                    `Found url record with id of ${urlEntry.id} created on ${urlEntry.createdAt} ✔️`
                )

            res.render('success', {
                host: req.header('host'),
                urlId: urlEntry.id + 2100,
            })
        } catch (err) {
            console.error('Error creating new url record: ', err)
            res.status(500).render('error', {
                layout: 'sub',
                status: 500,
                info: 'Server Error',
            })
        }
    }
})

// redirect with short url
app.get('/:id', (req, res) => {
    try {
        const reqId = req.params.id
        let uuid = parseInt(reqId)
        if (!uuid)
            return res.status(400).render('error', {
                layout: 'sub',
                status: 400,
                info: 'Bad Request: Invalid URL',
            })
        uuid -= 2100
        Url.findOne({ where: { id: uuid } }).then((urlEntry) => {
            if (urlEntry) res.redirect(urlEntry.target)
            else
                res.status(404).render('error', {
                    layout: 'sub',
                    status: 404,
                    info: 'URL not found for specified code',
                })
        })
    } catch (err) {
        console.error('Error finding url record: ', err)
        res.status(500).render('error', {
            layout: 'sub',
            status: 500,
            info: 'Server Error',
        })
    }
})

const PORT = process.env.PORT || 3000
app.listen(PORT, () =>
    console.log(`Server running on http://localhost:${PORT} ⚙️`)
)
