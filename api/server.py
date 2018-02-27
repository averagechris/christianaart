from sanic import Sanic
from sanic import response

BUILT_DIR = './build'
FRONT_END_ASSET_PATH = '{}/static'.format(BUILT_DIR)

app = Sanic()
app.static('/static/', FRONT_END_ASSET_PATH)
app.static('/service-worker.js', '{}/service-worker.js'.format(BUILT_DIR))


@app.route('/')
async def root(request):
    return await response.file('./build/index.html')

@app.route('/api')
async def api(request):
    return response.json({"nothing": "is here for you my friend"})
