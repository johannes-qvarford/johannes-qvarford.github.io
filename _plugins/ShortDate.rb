module Jekyll
    module ShortDate
        def short_date(time)
            time.to_date
        end
    end
end

Liquid::Template.register_filter(Jekyll::ShortDate)