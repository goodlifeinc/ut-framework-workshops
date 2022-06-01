Users
- Admins - Manage Breweries, Manage Admin Brewery, Manage Beers Admin, View Beer
- Brewery owners - Manage Breweries, Manage Own Brewery, Manage Beers in Stand, View Beer
- Public - View Brewery, View Beer, Manage Beer List, Write Beer Review, Write Brewery Review

Admin users can view/edit and delete Users. // part of ut-user
Admin users can view/edit and delete Breweries.
Admin users can view/edit and delete Beer in a Brewery.

===============

Brewery owner can edit his own brewery.
Brewery owner can add beers to his stand.

===============

Public users can see all beers, they can be filtered by brewery(and other?)
Public users can leave Review for a brewery or a beer.

===============

brewary = {id, name, description, location: { long, lat }}

brewery_beer = {brewery_id, beer_id}

beer = {breweryId, type: itemNameId, vol, name, description}
