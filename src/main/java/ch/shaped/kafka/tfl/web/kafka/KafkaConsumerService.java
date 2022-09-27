package ch.shaped.kafka.tfl.web.kafka;

import ch.shaped.kafka.tfl.web.model.CarParkState;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.kafka.annotation.KafkaListener;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.stereotype.Service;

@Service
public class KafkaConsumerService {

    private static final Logger LOG = LoggerFactory.getLogger(KafkaConsumerService.class);

    @Autowired
    private SimpMessagingTemplate template;

    @KafkaListener(topics="${kafka.topic}", groupId = "webnotifier")
    public void consume(CarParkState state) {
        LOG.info("Park received: "+state.getName());
        this.template.convertAndSend("/topic/pushNotification", state);
    }
}
