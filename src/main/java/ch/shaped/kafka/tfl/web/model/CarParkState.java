package ch.shaped.kafka.tfl.web.model;

public class CarParkState {

    private String name;
    private Integer bayCount;
    private Integer free;
    private Integer occupied;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Integer getBayCount() {
        return bayCount;
    }

    public void setBayCount(Integer bayCount) {
        this.bayCount = bayCount;
    }

    public Integer getFree() {
        return free;
    }

    public void setFree(Integer free) {
        this.free = free;
    }

    public Integer getOccupied() {
        return occupied;
    }

    public void setOccupied(Integer occupied) {
        this.occupied = occupied;
    }
}
