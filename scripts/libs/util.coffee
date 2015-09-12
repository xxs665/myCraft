define [],()->
    util =
        deparamQuery:(string)->
            if string.lenght is 0 then return {}
            pairs = _.map string.split("&"), (pair)->
                kv = pair.split "="
                return [kv[0], decodeURIComponent(kv[1])]
            return _.object pairs