# Topologies


~~~admonish question collapsible=true title=' [...] refers to the way a network is laid out, either physically or logically'

- Topology

~~~


~~~admonish question collapsible=true title='Which of the following is a basic network topology; Star, Mesh, Ring, All of the previous'

- All of the previous

~~~

~~~admonish question collapsible=true title='Which of the following is not a basic network topology; tree, multipoint, point-to-point, all of the previous'

- Multipoint
- Point-to-point

~~~

~~~admonish question collapsible=true title='Which of the following is a basic network topology; half-duplex, Multipoint, Ring, All of the previous?'

- Ring

~~~

~~~admonish question collapsible=true title='In a [__________] relationship, the link is shared equally between devices; peer-to-peer, point-to-point, master-slave, multiplexed?'

- Peer-to-peer

~~~

~~~admonish question collapsible=true title='In a [__________] relationship, one device controls traffic and others must transmit through it; peer-to-peer, point-to-point, Primary-Secondary, multiplexed?'

- Primary-Secondary

~~~


~~~admonish question collapsible=true title='Devices in a ring or mesh topology are usually configured in a [_________] relationship; peer-to-peer, point-to-point, Primary-Secondary, multiplexed?'

- peer-to-peer

~~~

~~~admonish question collapsible=true title='Devices in a star or tree typology are usually configured in a [________] relationship; peer-to-peer, point-to-point, Primary-Secondary, multiplexed?'

- primary-secondary

~~~

~~~admonish question collapsible=true title='The line configuration between devices in a mesh topology is [________]; peer-to-peer, point-to-point, Primary-Secondary, Duplex?'

- point-to-point

~~~

Formula for following questions:

Links to per node: \\[N - 1\\]

Links for fully connected Mesh: \\[ 2L_N = N(N - 1) \\]



~~~admonish question collapsible=true title='Seven devices are arranged in a fully connected mesh topology. [__________] physical channel links these devices; seven, six, Twenty, Twenty-one?'

\\[21 = 7 (\frac{7-1}{2})\\]

- Twenty-one

~~~


~~~admonish question collapsible=true title='Forty-five channel link [_________] devices arranged in a fully connected mesh topology; Nine, Ten, Forty, Forty-five-one?'

Start by multiplying both sides by 2 to get rid of the fraction: \\[ 2L_N = N(N - 1) \\]

Expand the right side: \\[ 2L_N = N^2 - N \\]

Rearrange the equation to form a standard quadratic equation: \\[ N^2 - N - 2L_N = 0 \\]

Solve this quadratic equation using the quadratic formula \\( N = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a} \\), where \\( a = 1 \\), \\( b = -1 \\), and \\( c = -2L_N \\): \\[ N = \frac{-(-1) \pm \sqrt{(-1)^2 - 4 \cdot 1 \cdot (-2L_N)}}{2 \cdot 1} \\] \\[ N = \frac{1 \pm \sqrt{1 + 8L_N}}{2} \\]

So, the solutions for \\( N \\) are: \\[ N = \frac{1 + \sqrt{1 + 8L_N}}{2} \quad \text{or} \quad N = \frac{1 - \sqrt{1 + 8L_N}}{2} \\]

Since \\( N \\) represents a count, we typically take the positive solution: \\[ N = \frac{1 + \sqrt{1 + 8L_N}}{2} \\]

- Ten

~~~

~~~admonish question collapsible=true title='When nine devices are arranged in a fully connected mesh topology, each device needs [________] links ; Eight, Nine, Ten, Thirty-six?'

- Eight

~~~

~~~admonish question collapsible=true title='When [_______] devices are arranged in a mesh topology, each device needs six input/outputs; Five, Six, Seven, Twenty-one?'

- Seven

~~~

~~~admonish question collapsible=true title='In a star topology there is one central node and 10 other nodes, how many cables do you need? 10, 11, 12, 20'

- 10

~~~